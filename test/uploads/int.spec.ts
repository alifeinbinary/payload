import type { CollectionSlug, Payload } from 'payload'

import { randomUUID } from 'crypto'
import fs from 'fs'
import path from 'path'
import { _internal_safeFetchGlobal, getFileByPath } from 'payload'
import { fileURLToPath } from 'url'
import { promisify } from 'util'

import type { NextRESTClient } from '../helpers/NextRESTClient.js'
import type { Enlarge, Media } from './payload-types.js'

import { initPayloadInt } from '../helpers/initPayloadInt.js'
import { createStreamableFile } from './createStreamableFile.js'
import {
  allowListMediaSlug,
  enlargeSlug,
  focalNoSizesSlug,
  focalOnlySlug,
  mediaSlug,
  noRestrictFileMimeTypesSlug,
  noRestrictFileTypesSlug,
  reduceSlug,
  relationSlug,
  restrictFileTypesSlug,
  skipAllowListSafeFetchMediaSlug,
  skipSafeFetchHeaderFilterSlug,
  skipSafeFetchMediaSlug,
  svgOnlySlug,
  unstoredMediaSlug,
  usersSlug,
} from './shared.js'

const filename = fileURLToPath(import.meta.url)
const dirname = path.dirname(filename)
const stat = promisify(fs.stat)

let restClient: NextRESTClient
let payload: Payload

describe('Collections - Uploads', () => {
  beforeAll(async () => {
    ;({ payload, restClient } = await initPayloadInt(dirname))

    await restClient.login({ slug: usersSlug })
  })

  afterAll(async () => {
    await payload.destroy()
  })

  describe('REST API', () => {
    describe('create', () => {
      it('creates from form data given a png', async () => {
        const formData = new FormData()
        const filePath = path.join(dirname, './image.png')
        const { file, handle } = await createStreamableFile(filePath)
        formData.append('file', file)

        const response = await restClient.POST(`/${mediaSlug}`, {
          body: formData,
          file,
        })
        const { doc } = await response.json()

        await handle.close()

        expect(response.status).toBe(201)

        const { sizes } = doc
        const expectedPath = path.join(dirname, './media')

        // Check for files
        expect(await fileExists(path.join(expectedPath, doc.filename))).toBe(true)
        expect(
          await fileExists(path.join(expectedPath, sizes.maintainedAspectRatio.filename)),
        ).toBe(true)
        expect(await fileExists(path.join(expectedPath, sizes.tablet.filename))).toBe(true)
        expect(await fileExists(path.join(expectedPath, sizes.mobile.filename))).toBe(true)
        expect(await fileExists(path.join(expectedPath, sizes.icon.filename))).toBe(true)

        // Check api response
        expect(doc.mimeType).toEqual('image/png')
        expect(doc.focalX).toEqual(50)
        expect(doc.focalY).toEqual(50)
        expect(sizes.maintainedAspectRatio.url).toContain('/api/media/file/image')
        expect(sizes.maintainedAspectRatio.url).toContain('.png')
        expect(sizes.maintainedAspectRatio.width).toEqual(1024)
        expect(sizes.maintainedAspectRatio.height).toEqual(1024)
        expect(sizes).toHaveProperty('tablet')
        expect(sizes).toHaveProperty('mobile')
        expect(sizes).toHaveProperty('icon')
      })

      it('creates from form data given an svg', async () => {
        const filePath = path.join(dirname, './image.svg')
        const formData = new FormData()
        const { file, handle } = await createStreamableFile(filePath)
        formData.append('file', file)

        const response = await restClient.POST(`/${mediaSlug}`, {
          body: formData,
          file,
        })

        const { doc } = await response.json()

        await handle.close()

        expect(response.status).toBe(201)

        // Check for files
        expect(await fileExists(path.join(dirname, './media', doc.filename))).toBe(true)

        // Check api response
        expect(doc.mimeType).toEqual('image/svg+xml')
        expect(doc.sizes.maintainedAspectRatio.url).toBeFalsy()
        expect(doc.width).toBeDefined()
        expect(doc.height).toBeDefined()
      })

      it('should have valid image url', async () => {
        const formData = new FormData()
        const filePath = path.join(dirname, './image.svg')
        const { file, handle } = await createStreamableFile(filePath)
        formData.append('file', file)

        const response = await restClient.POST(`/${mediaSlug}`, {
          body: formData,
          file,
        })
        const { doc } = await response.json()

        await handle.close()

        expect(response.status).toBe(201)
        const expectedPath = path.join(dirname, './media')
        expect(await fileExists(path.join(expectedPath, doc.filename))).toBe(true)

        expect(doc.url).not.toContain('undefined')
      })

      it('creates images that do not require all sizes', async () => {
        const formData = new FormData()
        const filePath = path.join(dirname, './small.png')
        const { file, handle } = await createStreamableFile(filePath)
        formData.append('file', file)

        const response = await restClient.POST(`/${mediaSlug}`, {
          body: formData,
          file,
        })
        const { doc } = await response.json()

        await handle.close()

        expect(response.status).toBe(201)

        const expectedPath = path.join(dirname, './media')

        // Check for files
        expect(await fileExists(path.join(expectedPath, doc.filename))).toBe(true)
        expect(await fileExists(path.join(expectedPath, 'small-640x480.png'))).toBe(false)
        expect(await fileExists(path.join(expectedPath, doc.sizes.icon.filename))).toBe(true)

        // Check api response
        expect(doc.sizes.tablet.filename).toBeNull()
        expect(doc.sizes.icon.filename).toBeDefined()
      })

      it('creates images from a different format', async () => {
        const formData = new FormData()
        const filePath = path.join(dirname, './image.jpg')
        const { file, handle } = await createStreamableFile(filePath)
        formData.append('file', file)

        const response = await restClient.POST(`/${mediaSlug}`, {
          body: formData,
          file,
        })
        const { doc } = await response.json()

        await handle.close()

        expect(response.status).toBe(201)

        const expectedPath = path.join(dirname, './media')

        // Check for files
        expect(await fileExists(path.join(expectedPath, doc.filename))).toBe(true)
        expect(await fileExists(path.join(expectedPath, doc.sizes.tablet.filename))).toBe(true)

        // Check api response
        expect(doc.filename).toContain('.png')
        expect(doc.mimeType).toEqual('image/png')
        expect(doc.sizes.maintainedAspectRatio.filename).toContain('.png')
        expect(doc.sizes.maintainedAspectRatio.mimeType).toContain('image/png')
        expect(doc.sizes.differentFormatFromMainImage.filename).toContain('.jpg')
        expect(doc.sizes.differentFormatFromMainImage.mimeType).toContain('image/jpeg')
      })

      it('creates media without storing a file', async () => {
        const formData = new FormData()
        const filePath = path.join(dirname, './unstored.png')
        const { file, handle } = await createStreamableFile(filePath)
        formData.append('file', file)

        // unstored media
        const response = await restClient.POST(`/${unstoredMediaSlug}`, {
          body: formData,
          file,
        })
        const { doc } = await response.json()

        await handle.close()

        expect(response.status).toBe(201)

        // Check for files
        expect(await fileExists(path.join(dirname, './media', doc.filename))).toBe(false)

        // Check api response
        expect(doc.filename).toBeDefined()
      })
    })
    describe('update', () => {
      it('should replace image and delete old files - by ID', async () => {
        const filePath = path.resolve(dirname, './image.png')
        const file = await getFileByPath(filePath)
        file.name = 'renamed.png'

        const mediaDoc = (await payload.create({
          collection: mediaSlug,
          data: {},
          file,
        })) as unknown as Media

        const formData = new FormData()
        const filePath2 = path.resolve(dirname, './small.png')
        const { file: file2, handle } = await createStreamableFile(filePath2)
        formData.append('file', file2)

        const response = await restClient.PATCH(`/${mediaSlug}/${mediaDoc.id}`, {
          body: formData,
          file: file2,
        })

        await handle.close()

        expect(response.status).toBe(200)

        const expectedPath = path.join(dirname, './media')

        // Check that previously existing files were removed
        expect(await fileExists(path.join(expectedPath, mediaDoc.filename))).toBe(false)
        expect(await fileExists(path.join(expectedPath, mediaDoc.sizes.icon.filename))).toBe(false)
      })

      it('should replace image and delete old files - where query', async () => {
        const filePath = path.resolve(dirname, './image.png')
        const file = await getFileByPath(filePath)
        file.name = 'renamed.png'

        const mediaDoc = (await payload.create({
          collection: mediaSlug,
          data: {},
          file,
        })) as unknown as Media

        const formData = new FormData()
        const filePath2 = path.resolve(dirname, './small.png')
        const { file: file2, handle } = await createStreamableFile(filePath2)
        formData.append('file', file2)

        const response = await restClient.PATCH(`/${mediaSlug}`, {
          body: formData,
          file: file2,
          query: {
            where: {
              id: {
                equals: mediaDoc.id,
              },
            },
          },
        })

        await handle.close()

        expect(response.status).toBe(200)

        const expectedPath = path.join(dirname, './media')

        // Check that previously existing files were removed
        expect(await fileExists(path.join(expectedPath, mediaDoc.filename))).toBe(false)
        expect(await fileExists(path.join(expectedPath, mediaDoc.sizes.icon.filename))).toBe(false)
      })
    })
    describe('delete', () => {
      it('should remove related files when deleting by ID', async () => {
        const formData = new FormData()
        const filePath = path.join(dirname, './image.png')
        const { file, handle } = await createStreamableFile(filePath)

        formData.append('file', file)

        const { doc } = await restClient
          .POST(`/${mediaSlug}`, {
            body: formData,
            file,
          })
          .then((res) => res.json())

        await handle.close()

        const response2 = await restClient.DELETE(`/${mediaSlug}/${doc.id}`)
        expect(response2.status).toBe(200)

        expect(await fileExists(path.join(dirname, doc.filename))).toBe(false)
      })

      it('should remove all related files when deleting with where query', async () => {
        const formData = new FormData()
        const filePath = path.join(dirname, './image.png')
        const { file, handle } = await createStreamableFile(filePath)
        formData.append('file', file)

        const { doc } = await restClient
          .POST(`/${mediaSlug}`, {
            body: formData,
            file,
          })
          .then((res) => res.json())

        await handle.close()

        const { errors } = await restClient
          .DELETE(`/${mediaSlug}`, {
            query: {
              where: {
                id: {
                  equals: doc.id,
                },
              },
            },
          })
          .then((res) => res.json())

        expect(errors).toHaveLength(0)

        expect(await fileExists(path.join(dirname, doc.filename))).toBe(false)
      })
    })
    describe('read', () => {
      it('should return the media document with the correct file type', async () => {
        const filePath = path.resolve(dirname, './image.png')
        const file = await getFileByPath(filePath)
        file.name = 'renamed.png'

        const mediaDoc = (await payload.create({
          collection: mediaSlug,
          data: {},
          file,
        })) as unknown as Media

        const response = await restClient.GET(`/${mediaSlug}/file/${mediaDoc.filename}`)

        expect(response.status).toBe(200)

        expect(response.headers.get('content-type')).toContain('image/png')
      })
    })
  })

  describe('Local API', () => {
    describe('create', () => {
      it('should create documents when passing filePath', async () => {
        const expectedPath = path.join(dirname, './svg-only')

        const svgFilePath = path.resolve(dirname, './svgWithXml.svg')
        const doc = await payload.create({
          collection: svgOnlySlug as CollectionSlug,
          data: {},
          filePath: svgFilePath,
        })

        expect(await fileExists(path.join(expectedPath, doc.filename))).toBe(true)
      })
    })

    describe('update', () => {
      it('should remove existing media on re-upload - by ID', async () => {
        // Create temp file
        const filePath = path.resolve(dirname, './temp.png')
        const file = await getFileByPath(filePath)
        file.name = 'temp.png'

        const mediaDoc = (await payload.create({
          collection: mediaSlug,
          data: {},
          file,
        })) as unknown as Media

        const expectedPath = path.join(dirname, './media')

        // Check that the temp file was created
        expect(await fileExists(path.join(expectedPath, mediaDoc.filename))).toBe(true)

        // Replace the temp file with a new one
        const newFilePath = path.resolve(dirname, './temp-renamed.png')
        const newFile = await getFileByPath(newFilePath)
        newFile.name = 'temp-renamed.png'

        const updatedMediaDoc = (await payload.update({
          collection: mediaSlug,
          id: mediaDoc.id,
          file: newFile,
          data: {},
        })) as unknown as Media

        // Check that the replacement file was created and the old one was removed
        expect(await fileExists(path.join(expectedPath, updatedMediaDoc.filename))).toBe(true)
        expect(await fileExists(path.join(expectedPath, mediaDoc.filename))).toBe(false)
      })

      it('should remove existing media on re-upload - where query', async () => {
        // Create temp file
        const filePath = path.resolve(dirname, './temp.png')
        const file = await getFileByPath(filePath)
        file.name = 'temp.png'

        const mediaDoc = (await payload.create({
          collection: mediaSlug,
          data: {},
          file,
        })) as unknown as Media

        const expectedPath = path.join(dirname, './media')

        // Check that the temp file was created
        expect(await fileExists(path.join(expectedPath, mediaDoc.filename))).toBe(true)

        // Replace the temp file with a new one
        const newFilePath = path.resolve(dirname, './temp-renamed.png')
        const newFile = await getFileByPath(newFilePath)
        newFile.name = 'temp-renamed-second.png'

        const updatedMediaDoc = (await payload.update({
          collection: mediaSlug,
          where: {
            id: { equals: mediaDoc.id },
          },
          file: newFile,
          data: {},
        })) as unknown as { docs: Media[] }

        // Check that the replacement file was created and the old one was removed
        expect(updatedMediaDoc.docs[0].filename).toEqual(newFile.name)
        expect(await fileExists(path.join(expectedPath, updatedMediaDoc.docs[0].filename))).toBe(
          true,
        )
        expect(await fileExists(path.join(expectedPath, mediaDoc.filename))).toBe(false)
      })

      it('should remove sizes that do not pertain to the new image - by ID', async () => {
        const filePath = path.resolve(dirname, './image.png')
        const file = await getFileByPath(filePath)
        const small = await getFileByPath(path.resolve(dirname, './small.png'))

        const { id } = await payload.create({
          collection: mediaSlug,
          data: {},
          file,
        })

        const doc = (await payload.update({
          collection: mediaSlug,
          id,
          data: {},
          file: small,
        })) as unknown as Media

        expect(doc.sizes.icon).toBeDefined()
        expect(doc.sizes.tablet.width).toBeNull()
      })

      it('should remove sizes that do not pertain to the new image - where query', async () => {
        const filePath = path.resolve(dirname, './image.png')
        const file = await getFileByPath(filePath)
        const small = await getFileByPath(path.resolve(dirname, './small.png'))

        const { id } = await payload.create({
          collection: mediaSlug,
          data: {},
          file,
        })

        const doc = (await payload.update({
          collection: mediaSlug,
          where: {
            id: { equals: id },
          },
          data: {},
          file: small,
        })) as unknown as { docs: Media[] }

        expect(doc.docs[0].sizes.icon).toBeDefined()
        expect(doc.docs[0].sizes.tablet.width).toBeNull()
      })

      it('should allow removing file from upload relationship field - by ID', async () => {
        const filePath = path.resolve(dirname, './image.png')
        const file = await getFileByPath(filePath)
        file.name = 'renamed.png'

        const { id } = await payload.create({
          collection: mediaSlug,
          data: {},
          file,
        })

        const related = await payload.create({
          collection: relationSlug,
          data: {
            image: id,
          },
        })

        const doc = await payload.update({
          collection: relationSlug,
          id: related.id,
          data: {
            image: null,
          },
        })

        expect(doc.image).toBeFalsy()
      })

      it('should allow update removing a relationship - where query', async () => {
        const filePath = path.resolve(dirname, './image.png')
        const file = await getFileByPath(filePath)
        file.name = 'renamed.png'

        const { id } = await payload.create({
          collection: mediaSlug,
          data: {},
          file,
        })

        const related = await payload.create({
          collection: relationSlug,
          data: {
            image: id,
          },
        })

        const doc = await payload.update({
          collection: relationSlug,
          where: {
            id: { equals: related.id },
          },
          data: {
            image: null,
          },
        })

        expect(doc.docs[0].image).toBeFalsy()
      })
    })

    describe('cookie filtering', () => {
      it('should filter out payload cookies when externalFileHeaderFilter is not defined', async () => {
        const testCookies = ['payload-token=123', 'other-cookie=456', 'payload-something=789'].join(
          '; ',
        )

        const fetchSpy = jest.spyOn(global, 'fetch')

        await payload.create({
          collection: skipSafeFetchMediaSlug,
          data: {
            filename: 'fat-head-nate.png',
            url: 'https://www.payload.marketing/fat-head-nate.png',
          },
          req: {
            headers: new Headers({
              cookie: testCookies,
            }),
          },
        })

        const [[, options]] = fetchSpy.mock.calls
        const cookieHeader = options.headers.cookie

        expect(cookieHeader).not.toContain('payload-token=123')
        expect(cookieHeader).not.toContain('payload-something=789')
        expect(cookieHeader).toContain('other-cookie=456')

        fetchSpy.mockRestore()
      })

      it('should keep all cookies when externalFileHeaderFilter is defined', async () => {
        const testCookies = ['payload-token=123', 'other-cookie=456', 'payload-something=789'].join(
          '; ',
        )

        const fetchSpy = jest.spyOn(global, 'fetch')

        await payload.create({
          collection: skipSafeFetchHeaderFilterSlug,
          data: {
            filename: 'fat-head-nate.png',
            url: 'https://www.payload.marketing/fat-head-nate.png',
          },
          req: {
            headers: new Headers({
              cookie: testCookies,
            }),
          },
        })

        const [[, options]] = fetchSpy.mock.calls
        const cookieHeader = options.headers.cookie

        expect(cookieHeader).toContain('other-cookie=456')
        expect(cookieHeader).toContain('payload-token=123')
        expect(cookieHeader).toContain('payload-something=789')

        fetchSpy.mockRestore()
      })
    })

    describe('filters', () => {
      it.each`
        url                                  | collection            | errorContains
        ${'http://127.0.0.1/file.png'}       | ${mediaSlug}          | ${'unsafe'}
        ${'http://[::1]/file.png'}           | ${mediaSlug}          | ${'unsafe'}
        ${'http://10.0.0.1/file.png'}        | ${mediaSlug}          | ${'unsafe'}
        ${'http://192.168.1.1/file.png'}     | ${mediaSlug}          | ${'unsafe'}
        ${'http://172.16.0.1/file.png'}      | ${mediaSlug}          | ${'unsafe'}
        ${'http://169.254.1.1/file.png'}     | ${mediaSlug}          | ${'unsafe'}
        ${'http://224.0.0.1/file.png'}       | ${mediaSlug}          | ${'unsafe'}
        ${'http://0.0.0.0/file.png'}         | ${mediaSlug}          | ${'unsafe'}
        ${'http://255.255.255.255/file.png'} | ${mediaSlug}          | ${'unsafe'}
        ${'http://127.0.0.1/file.png'}       | ${allowListMediaSlug} | ${'There was a problem while uploading the file.'}
        ${'http://[::1]/file.png'}           | ${allowListMediaSlug} | ${'There was a problem while uploading the file.'}
        ${'http://10.0.0.1/file.png'}        | ${allowListMediaSlug} | ${'There was a problem while uploading the file.'}
        ${'http://192.168.1.1/file.png'}     | ${allowListMediaSlug} | ${'There was a problem while uploading the file.'}
        ${'http://172.16.0.1/file.png'}      | ${allowListMediaSlug} | ${'There was a problem while uploading the file.'}
        ${'http://169.254.1.1/file.png'}     | ${allowListMediaSlug} | ${'There was a problem while uploading the file.'}
        ${'http://224.0.0.1/file.png'}       | ${allowListMediaSlug} | ${'There was a problem while uploading the file.'}
        ${'http://0.0.0.0/file.png'}         | ${allowListMediaSlug} | ${'There was a problem while uploading the file.'}
        ${'http://255.255.255.255/file.png'} | ${allowListMediaSlug} | ${'There was a problem while uploading the file.'}
      `(
        'should block or filter uploading from $collection with URL: $url',
        async ({ url, collection, errorContains }) => {
          const globalCachedFn = _internal_safeFetchGlobal.lookup

          let hostname = new URL(url).hostname

          const isIPV6 = hostname.includes('::')

          // Strip brackets from IPv6 addresses
          // eslint-disable-next-line jest/no-conditional-in-test
          if (isIPV6) {
            hostname = hostname.slice(1, -1)
          }

          // Here we're essentially mocking our own DNS provider, to get 'https://www.payloadcms.com/test.png' to resolve to the IP
          // we'd like to test for
          // @ts-expect-error this does not need to be mocked 100% correctly
          _internal_safeFetchGlobal.lookup = (_hostname, _options, callback) => {
            // eslint-disable-next-line jest/no-conditional-in-test
            callback(null, hostname as any, isIPV6 ? 6 : 4)
          }

          await expect(
            payload.create({
              collection,
              data: {
                filename: 'test.png',
                // Need to pass a domain for lookup to be called. We monkey patch the IP lookup function above
                // to return the IP address we want to test.
                url: 'https://www.payloadcms.com/test.png',
              },
            }),
          ).rejects.toThrow(
            expect.objectContaining({
              name: 'FileRetrievalError',
              message: expect.stringContaining(errorContains),
            }),
          )

          _internal_safeFetchGlobal.lookup = globalCachedFn

          // Now ensure this throws if we pass the IP address directly, without the mock
          await expect(
            payload.create({
              collection,
              data: {
                filename: 'test.png',
                url,
              },
            }),
          ).rejects.toThrow(
            expect.objectContaining({
              name: 'FileRetrievalError',
              message: expect.stringContaining(errorContains),
            }),
          )
        },
      )
      it('should fetch when skipSafeFetch is set with a boolean', async () => {
        await expect(
          payload.create({
            collection: skipSafeFetchMediaSlug as CollectionSlug,
            data: {
              filename: 'test.png',
              url: 'http://127.0.0.1/file.png',
            },
          }),
          // We're expecting this to throw because the file doesn't exist -- not because the url is unsafe
        ).rejects.toThrow(
          expect.objectContaining({
            name: 'FileRetrievalError',
            message: expect.not.stringContaining('unsafe'),
          }),
        )
      })

      it('should fetch when skipSafeFetch is set with an AllowList', async () => {
        await expect(
          payload.create({
            collection: skipAllowListSafeFetchMediaSlug as CollectionSlug,
            data: {
              filename: 'test.png',
              url: 'http://127.0.0.1/file.png',
            },
          }),
          // We're expecting this to throw because the file doesn't exist -- not because the url is unsafe
        ).rejects.toThrow(
          expect.objectContaining({
            name: 'FileRetrievalError',
            message: expect.not.stringContaining('unsafe'),
          }),
        )
      })
    })

    describe('file restrictions', () => {
      const file: File = {
        name: `test-${randomUUID()}.html`,
        data: Buffer.from('<html><script>alert("test")</script></html>'),
        mimetype: 'text/html',
        size: 100,
      }
      it('should not allow files with restricted file types', async () => {
        await expect(async () =>
          payload.create({
            collection: restrictFileTypesSlug as CollectionSlug,
            data: {},
            file,
          }),
        ).rejects.toThrow(
          expect.objectContaining({
            name: 'ValidationError',
            message: `The following field is invalid: file`,
          }),
        )
      })

      it('should allow files with restricted file types when allowRestrictedFileTypes is true', async () => {
        await expect(
          payload.create({
            collection: noRestrictFileTypesSlug as CollectionSlug,
            data: {},
            file,
          }),
        ).resolves.not.toThrow()
      })

      it('should allow files with restricted file types when mimeTypes are set', async () => {
        await expect(
          payload.create({
            collection: noRestrictFileMimeTypesSlug as CollectionSlug,
            data: {},
            file,
          }),
        ).resolves.not.toThrow()
      })
    })
  })

  describe('focal point', () => {
    let file

    beforeAll(async () => {
      // Create image
      const filePath = path.resolve(dirname, './image.png')
      file = await getFileByPath(filePath)
      file.name = 'focal.png'
    })

    it('should be able to set focal point through local API', async () => {
      const doc = await payload.create({
        collection: focalOnlySlug,
        data: {
          focalX: 5,
          focalY: 5,
        },
        file,
      })

      expect(doc.focalX).toEqual(5)
      expect(doc.focalY).toEqual(5)

      const updatedFocal = await payload.update({
        collection: focalOnlySlug,
        id: doc.id,
        data: {
          focalX: 10,
          focalY: 10,
        },
      })

      expect(updatedFocal.focalX).toEqual(10)
      expect(updatedFocal.focalY).toEqual(10)

      const updateWithoutFocal = await payload.update({
        collection: focalOnlySlug,
        id: doc.id,
        data: {},
      })

      // Expect focal point to be the same
      expect(updateWithoutFocal.focalX).toEqual(10)
      expect(updateWithoutFocal.focalY).toEqual(10)
    })

    it('should default focal point to 50, 50', async () => {
      const doc = await payload.create({
        collection: focalOnlySlug,
        data: {
          // No focal point
        },
        file,
      })

      expect(doc.focalX).toEqual(50)
      expect(doc.focalY).toEqual(50)

      const updateWithoutFocal = await payload.update({
        collection: focalOnlySlug,
        id: doc.id,
        data: {},
      })

      expect(updateWithoutFocal.focalX).toEqual(50)
      expect(updateWithoutFocal.focalY).toEqual(50)
    })

    it('should set focal point even if no sizes defined', async () => {
      const doc = await payload.create({
        collection: focalNoSizesSlug, // config without sizes
        data: {
          // No focal point
        },
        file,
      })

      expect(doc.focalX).toEqual(50)
      expect(doc.focalY).toEqual(50)
    })
  })

  describe('Image Manipulation', () => {
    it('should enlarge images if resize options `withoutEnlargement` is set to false', async () => {
      const small = await getFileByPath(path.resolve(dirname, './small.png'))

      const result = await payload.create({
        collection: enlargeSlug,
        data: {},
        file: small,
      })

      expect(result).toBeTruthy()

      const { sizes } = result as unknown as Enlarge
      const expectedPath = path.join(dirname, './media/enlarge')

      // Check for files
      expect(await fileExists(path.join(expectedPath, small.name))).toBe(true)
      expect(await fileExists(path.join(expectedPath, sizes.resizedLarger.filename))).toBe(true)
      expect(await fileExists(path.join(expectedPath, sizes.resizedSmaller.filename))).toBe(true)
      expect(await fileExists(path.join(expectedPath, sizes.accidentalSameSize.filename))).toBe(
        true,
      )
      expect(await fileExists(path.join(expectedPath, sizes.sameSizeWithNewFormat.filename))).toBe(
        true,
      )

      // Check api response
      expect(sizes.sameSizeWithNewFormat.mimeType).toBe('image/jpeg')
      expect(sizes.sameSizeWithNewFormat.filename).toBe('small-320x80.jpg')

      expect(sizes.resizedLarger.mimeType).toBe('image/png')
      expect(sizes.resizedLarger.filename).toBe('small-640x480.png')

      expect(sizes.resizedSmaller.mimeType).toBe('image/png')
      expect(sizes.resizedSmaller.filename).toBe('small-180x50.png')

      expect(sizes.accidentalSameSize.mimeType).toBe('image/png')
      expect(sizes.accidentalSameSize.filename).toBe('small-320x80.png')

      await payload.delete({
        collection: enlargeSlug,
        id: result.id,
      })
    })

    // This test makes sure that the image resizing is not prevented if only one dimension is larger (due to payload preventing enlargement by default)
    it('should resize images if one desired dimension is smaller and the other is larger', async () => {
      const small = await getFileByPath(path.resolve(dirname, './small.png'))

      const result = (await payload.create({
        collection: enlargeSlug,
        data: {},
        file: small,
      })) as unknown as Enlarge

      expect(result).toBeTruthy()

      const { sizes } = result
      const expectedPath = path.join(dirname, './media/enlarge')

      // Check for files
      expect(await fileExists(path.join(expectedPath, sizes.widthLowerHeightLarger.filename))).toBe(
        true,
      )
      // Check api response
      expect(sizes.widthLowerHeightLarger.mimeType).toBe('image/png')
      expect(sizes.widthLowerHeightLarger.filename).toBe('small-300x300.png')
      await payload.delete({
        collection: enlargeSlug,
        id: result.id,
      })
    })

    it('should not reduce images if resize options `withoutReduction` is set to true', async () => {
      const small = await getFileByPath(path.resolve(dirname, './small.png'))

      const result = await payload.create({
        collection: reduceSlug,
        data: {},
        file: small,
      })

      expect(result).toBeTruthy()

      const { sizes } = result as unknown as Enlarge
      const expectedPath = path.join(dirname, './media/reduce')

      // Check for files
      expect(await fileExists(path.join(expectedPath, small.name))).toBe(true)
      expect(await fileExists(path.join(expectedPath, 'small-640x480.png'))).toBe(false)
      expect(await fileExists(path.join(expectedPath, 'small-180x50.png'))).toBe(false)
      expect(await fileExists(path.join(expectedPath, sizes.accidentalSameSize.filename))).toBe(
        true,
      )
      expect(await fileExists(path.join(expectedPath, sizes.sameSizeWithNewFormat.filename))).toBe(
        true,
      )

      // Check api response
      expect(sizes.sameSizeWithNewFormat.mimeType).toBe('image/jpeg')
      expect(sizes.sameSizeWithNewFormat.filename).toBe('small-320x80.jpg')

      expect(sizes.resizedLarger.mimeType).toBeNull()
      expect(sizes.resizedLarger.filename).toBeNull()

      expect(sizes.accidentalSameSize.mimeType).toBe('image/png')
      expect(sizes.resizedSmaller.filename).toBe('small-320x80.png')

      expect(sizes.accidentalSameSize.mimeType).toBe('image/png')
      expect(sizes.accidentalSameSize.filename).toBe('small-320x80.png')
    })

    it('should not enlarge image if `withoutEnlargement` is set to undefined and width or height is undefined when imageSizes are larger than the uploaded image', async () => {
      const small = await getFileByPath(path.resolve(dirname, './small.png'))

      const result = await payload.create({
        collection: enlargeSlug,
        data: {},
        file: small,
      })

      expect(result).toBeTruthy()

      const { sizes } = result as unknown as Enlarge

      expect(sizes.undefinedHeightWithoutEnlargement).toMatchObject({
        filename: null,
        filesize: null,
        height: null,
        mimeType: null,
        url: null,
        width: null,
      })

      await payload.delete({
        collection: enlargeSlug,
        id: result.id,
      })
    })
  })

  describe('Required Files', () => {
    it('should allow file to be optional if filesRequiredOnCreate is false', async () => {
      const successfulCreate = await payload.create({
        collection: 'optional-file',
        data: {},
      })

      expect(successfulCreate.id).toBeDefined()
    })

    it('should throw an error if no file and filesRequiredOnCreate is true', async () => {
      await expect(async () =>
        payload.create({
          collection: 'required-file',
          data: {},
        }),
      ).rejects.toThrow(
        expect.objectContaining({
          name: 'MissingFile',
          message: 'No files were uploaded.',
        }),
      )
    })
    it('should throw an error if no file and filesRequiredOnCreate is not defined', async () => {
      await expect(async () =>
        payload.create({
          collection: mediaSlug,
          data: {},
        }),
      ).rejects.toThrow(
        expect.objectContaining({
          name: 'MissingFile',
          message: 'No files were uploaded.',
        }),
      )
    })
  })

  describe('Duplicate', () => {
    it('should duplicate upload collection doc', async () => {
      const filePath = path.resolve(dirname, './image.png')
      const file = await getFileByPath(filePath)
      file.name = 'file-to-duplicate.png'

      const mediaDoc = await payload.create({
        collection: 'media',
        data: {},
        file,
      })

      expect(mediaDoc).toBeDefined()

      const duplicatedDoc = await payload.duplicate({
        collection: 'media',
        id: mediaDoc.id,
      })

      const expectedPath = path.join(dirname, './media')

      expect(await fileExists(path.join(expectedPath, duplicatedDoc.filename))).toBe(true)
    })
  })
})

async function fileExists(fileName: string): Promise<boolean> {
  try {
    await stat(fileName)
    return true
  } catch (err) {
    return false
  }
}
