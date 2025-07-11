import type { Product } from '@/payload-types'

import Link from 'next/link'
import React from 'react'
import clsx from 'clsx'
import { Media } from '@/components/Media'
import { Price } from '@/components/Price'

export function ProductGridItem({ product }: { product: Partial<Product> }) {
  const { gallery, priceInUSD, title } = product

  const image = gallery?.[0] && typeof gallery[0] !== 'string' ? gallery[0] : false

  return (
    <Link className="relative inline-block h-full w-full group" href={`/products/${product.slug}`}>
      {image ? (
        <Media
          className={clsx(
            'relative aspect-square h-full w-full max-h-[23.75rem] object-cover border rounded-2xl p-8 bg-primary-foreground',
          )}
          height={80}
          imgClassName={clsx('h-full w-full object-cover rounded-2xl', {
            'transition duration-300 ease-in-out group-hover:scale-102': true,
          })}
          resource={image}
          width={80}
        />
      ) : null}

      <div className="font-mono text-primary/50 group-hover:text-primary/100 flex justify-between items-center mt-4">
        <div>{title}</div>

        {priceInUSD && (
          <div className="">
            <Price amount={priceInUSD} />
          </div>
        )}
      </div>
    </Link>
  )
}
