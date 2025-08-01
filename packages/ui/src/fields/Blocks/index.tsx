'use client'
import type { BlocksFieldClientComponent, ClientBlock } from 'payload'

import { getTranslation } from '@payloadcms/translations'
import React, { Fragment, useCallback, useMemo } from 'react'
import { toast } from 'sonner'

import type { ClipboardPasteData } from '../../elements/ClipboardAction/types.js'

import { Banner } from '../../elements/Banner/index.js'
import { Button } from '../../elements/Button/index.js'
import { clipboardCopy, clipboardPaste } from '../../elements/ClipboardAction/clipboardUtilities.js'
import { ClipboardAction } from '../../elements/ClipboardAction/index.js'
import {
  mergeFormStateFromClipboard,
  reduceFormStateByPath,
} from '../../elements/ClipboardAction/mergeFormStateFromClipboard.js'
import { DraggableSortableItem } from '../../elements/DraggableSortable/DraggableSortableItem/index.js'
import { DraggableSortable } from '../../elements/DraggableSortable/index.js'
import { DrawerToggler } from '../../elements/Drawer/index.js'
import { useDrawerSlug } from '../../elements/Drawer/useDrawerSlug.js'
import { ErrorPill } from '../../elements/ErrorPill/index.js'
import { RenderCustomComponent } from '../../elements/RenderCustomComponent/index.js'
import { useForm, useFormSubmitted } from '../../forms/Form/context.js'
import { extractRowsAndCollapsedIDs, toggleAllRows } from '../../forms/Form/rowHelpers.js'
import { NullifyLocaleField } from '../../forms/NullifyField/index.js'
import { useField } from '../../forms/useField/index.js'
import { withCondition } from '../../forms/withCondition/index.js'
import { useConfig } from '../../providers/Config/index.js'
import { useDocumentInfo } from '../../providers/DocumentInfo/index.js'
import { useLocale } from '../../providers/Locale/index.js'
import { useTranslation } from '../../providers/Translation/index.js'
import { scrollToID } from '../../utilities/scrollToID.js'
import './index.scss'
import { FieldDescription } from '../FieldDescription/index.js'
import { FieldError } from '../FieldError/index.js'
import { FieldLabel } from '../FieldLabel/index.js'
import { fieldBaseClass } from '../shared/index.js'
import { BlockRow } from './BlockRow.js'
import { BlocksDrawer } from './BlocksDrawer/index.js'

const baseClass = 'blocks-field'

const BlocksFieldComponent: BlocksFieldClientComponent = (props) => {
  const { i18n, t } = useTranslation()

  const {
    field: {
      name,
      type,
      admin: { className, description, isSortable = true } = {},
      blockReferences,
      blocks,
      label,
      labels: labelsFromProps,
      localized,
      maxRows,
      minRows: minRowsProp,
      required,
    },
    path: pathFromProps,
    permissions,
    readOnly,
    schemaPath: schemaPathFromProps,
    validate,
  } = props

  const schemaPath = schemaPathFromProps ?? name

  const minRows = (minRowsProp ?? required) ? 1 : 0

  const { setDocFieldPreferences } = useDocumentInfo()
  const {
    addFieldRow,
    dispatchFields,
    getFields,
    moveFieldRow,
    removeFieldRow,
    replaceState,
    setModified,
  } = useForm()
  const { code: locale } = useLocale()
  const {
    config: { localization },
    config,
  } = useConfig()
  const drawerSlug = useDrawerSlug('blocks-drawer')
  const submitted = useFormSubmitted()

  const labels = {
    plural: t('fields:blocks'),
    singular: t('fields:block'),
    ...labelsFromProps,
  }

  const editingDefaultLocale = (() => {
    if (localization && localization.fallback) {
      const defaultLocale = localization.defaultLocale
      return locale === defaultLocale
    }

    return true
  })()

  const clientBlocks = useMemo(() => {
    if (!blockReferences) {
      return blocks
    }

    const resolvedBlocks: ClientBlock[] = []
    for (const blockReference of blockReferences) {
      const block =
        typeof blockReference === 'string' ? config.blocksMap[blockReference] : blockReference
      if (block) {
        resolvedBlocks.push(block)
      }
    }

    return resolvedBlocks
  }, [blockReferences, blocks, config.blocksMap])

  const memoizedValidate = useCallback(
    (value, options) => {
      // alternative locales can be null
      if (!editingDefaultLocale && value === null) {
        return true
      }
      if (typeof validate === 'function') {
        return validate(value, { ...options, maxRows, minRows, required })
      }
    },
    [maxRows, minRows, required, validate, editingDefaultLocale],
  )

  const {
    customComponents: { AfterInput, BeforeInput, Description, Error, Label } = {},
    disabled,
    errorPaths,
    path,
    rows = [],
    showError,
    valid,
    value,
  } = useField<number>({
    hasRows: true,
    potentiallyStalePath: pathFromProps,
    validate: memoizedValidate,
  })

  const addRow = useCallback(
    (rowIndex: number, blockType: string) => {
      addFieldRow({
        blockType,
        path,
        rowIndex,
        schemaPath,
      })

      setTimeout(() => {
        scrollToID(`${path}-row-${rowIndex + 1}`)
      }, 0)
    },
    [addFieldRow, path, schemaPath],
  )

  const duplicateRow = useCallback(
    (rowIndex: number) => {
      dispatchFields({ type: 'DUPLICATE_ROW', path, rowIndex })
      setModified(true)

      setTimeout(() => {
        scrollToID(`${path}-row-${rowIndex + 1}`)
      }, 0)
    },
    [dispatchFields, path, setModified],
  )

  const removeRow = useCallback(
    (rowIndex: number) => {
      removeFieldRow({
        path,
        rowIndex,
      })
    },
    [path, removeFieldRow],
  )

  const moveRow = useCallback(
    (moveFromIndex: number, moveToIndex: number) => {
      moveFieldRow({ moveFromIndex, moveToIndex, path })
    },
    [moveFieldRow, path],
  )

  const toggleCollapseAll = useCallback(
    (collapsed: boolean) => {
      const { collapsedIDs, updatedRows } = toggleAllRows({
        collapsed,
        rows,
      })

      dispatchFields({ type: 'SET_ALL_ROWS_COLLAPSED', path, updatedRows })
      setDocFieldPreferences(path, { collapsed: collapsedIDs })
    },
    [dispatchFields, path, rows, setDocFieldPreferences],
  )

  const setCollapse = useCallback(
    (rowID: string, collapsed: boolean) => {
      const { collapsedIDs, updatedRows } = extractRowsAndCollapsedIDs({
        collapsed,
        rowID,
        rows,
      })

      dispatchFields({ type: 'SET_ROW_COLLAPSED', path, updatedRows })
      setDocFieldPreferences(path, { collapsed: collapsedIDs })
    },
    [dispatchFields, path, rows, setDocFieldPreferences],
  )

  const copyRow = useCallback(
    (rowIndex: number) => {
      const clipboardResult = clipboardCopy({
        type,
        blocks: clientBlocks,
        getDataToCopy: () =>
          reduceFormStateByPath({
            formState: { ...getFields() },
            path,
            rowIndex,
          }),
        path,
        rowIndex,
        t,
      })

      if (typeof clipboardResult === 'string') {
        toast.error(clipboardResult)
      } else {
        toast.success(t('general:copied'))
      }
    },
    [clientBlocks, path, t, type, getFields],
  )

  const pasteRow = useCallback(
    (rowIndex: number) => {
      const pasteArgs = {
        onPaste: (dataFromClipboard: ClipboardPasteData) => {
          const formState = { ...getFields() }
          const newState = mergeFormStateFromClipboard({
            dataFromClipboard,
            formState,
            path,
            rowIndex,
          })
          replaceState(newState)
          setModified(true)
        },
        path,
        schemaBlocks: clientBlocks,
        t,
      }

      const clipboardResult = clipboardPaste(pasteArgs)

      if (typeof clipboardResult === 'string') {
        toast.error(clipboardResult)
      }
    },
    [clientBlocks, getFields, path, replaceState, setModified, t],
  )

  const pasteBlocks = useCallback(
    (dataFromClipboard: ClipboardPasteData) => {
      const formState = { ...getFields() }
      const newState = mergeFormStateFromClipboard({
        dataFromClipboard,
        formState,
        path,
      })
      replaceState(newState)
      setModified(true)
    },
    [getFields, path, replaceState, setModified],
  )

  const hasMaxRows = maxRows && rows.length >= maxRows

  const fieldErrorCount = errorPaths.length
  const fieldHasErrors = submitted && fieldErrorCount + (valid ? 0 : 1) > 0

  const showMinRows = rows.length < minRows || (required && rows.length === 0)
  const showRequired = readOnly && rows.length === 0

  return (
    <div
      className={[
        fieldBaseClass,
        baseClass,
        className,
        fieldHasErrors ? `${baseClass}--has-error` : `${baseClass}--has-no-error`,
      ]
        .filter(Boolean)
        .join(' ')}
      id={`field-${path?.replace(/\./g, '__')}`}
    >
      {showError && (
        <RenderCustomComponent
          CustomComponent={Error}
          Fallback={<FieldError path={path} showError={showError} />}
        />
      )}
      <header className={`${baseClass}__header`}>
        <div className={`${baseClass}__header-wrap`}>
          <div className={`${baseClass}__heading-with-error`}>
            <h3>
              <RenderCustomComponent
                CustomComponent={Label}
                Fallback={
                  <FieldLabel
                    as="span"
                    label={label}
                    localized={localized}
                    path={path}
                    required={required}
                  />
                }
              />
            </h3>
            {fieldHasErrors && fieldErrorCount > 0 && (
              <ErrorPill count={fieldErrorCount} i18n={i18n} withMessage />
            )}
          </div>
          <ul className={`${baseClass}__header-actions`}>
            {rows.length > 0 && (
              <Fragment>
                <li>
                  <button
                    className={`${baseClass}__header-action`}
                    onClick={() => toggleCollapseAll(true)}
                    type="button"
                  >
                    {t('fields:collapseAll')}
                  </button>
                </li>
                <li>
                  <button
                    className={`${baseClass}__header-action`}
                    onClick={() => toggleCollapseAll(false)}
                    type="button"
                  >
                    {t('fields:showAll')}
                  </button>
                </li>
              </Fragment>
            )}
            <li>
              <ClipboardAction
                allowCopy={rows?.length > 0}
                allowPaste={!readOnly}
                blocks={clientBlocks}
                className={`${baseClass}__header-action`}
                disabled={disabled}
                getDataToCopy={() =>
                  reduceFormStateByPath({
                    formState: { ...getFields() },
                    path,
                  })
                }
                onPaste={pasteBlocks}
                path={path}
                type={type}
              />
            </li>
          </ul>
        </div>
        <RenderCustomComponent
          CustomComponent={Description}
          Fallback={<FieldDescription description={description} path={path} />}
        />
      </header>
      {BeforeInput}
      <NullifyLocaleField fieldValue={value} localized={localized} path={path} />
      {(rows.length > 0 || (!valid && (showRequired || showMinRows))) && (
        <DraggableSortable
          className={`${baseClass}__rows`}
          ids={rows.map((row) => row.id)}
          onDragEnd={({ moveFromIndex, moveToIndex }) => moveRow(moveFromIndex, moveToIndex)}
        >
          {rows.map((row, i) => {
            const { blockType, isLoading } = row
            const blockConfig: ClientBlock =
              config.blocksMap[blockType] ??
              ((blockReferences ?? blocks).find(
                (block) => typeof block !== 'string' && block.slug === blockType,
              ) as ClientBlock)

            if (blockConfig) {
              const rowPath = `${path}.${i}`

              const rowErrorCount = errorPaths.filter((errorPath) =>
                errorPath.startsWith(rowPath + '.'),
              ).length

              return (
                <DraggableSortableItem
                  disabled={readOnly || disabled || !isSortable}
                  id={row.id}
                  key={row.id}
                >
                  {(draggableSortableItemProps) => (
                    <BlockRow
                      {...draggableSortableItemProps}
                      addRow={addRow}
                      block={blockConfig}
                      blocks={blockReferences ?? blocks}
                      copyRow={copyRow}
                      duplicateRow={duplicateRow}
                      errorCount={rowErrorCount}
                      fields={blockConfig.fields}
                      hasMaxRows={hasMaxRows}
                      isLoading={isLoading}
                      isSortable={isSortable}
                      Label={rows?.[i]?.customComponents?.RowLabel}
                      labels={labels}
                      moveRow={moveRow}
                      parentPath={path}
                      pasteRow={pasteRow}
                      path={rowPath}
                      permissions={permissions}
                      readOnly={readOnly || disabled}
                      removeRow={removeRow}
                      row={row}
                      rowCount={rows.length}
                      rowIndex={i}
                      schemaPath={schemaPath + blockConfig.slug}
                      setCollapse={setCollapse}
                    />
                  )}
                </DraggableSortableItem>
              )
            }

            return null
          })}
          {!editingDefaultLocale && (
            <React.Fragment>
              {showMinRows && (
                <Banner type="error">
                  {t('validation:requiresAtLeast', {
                    count: minRows,
                    label:
                      getTranslation(minRows > 1 ? labels.plural : labels.singular, i18n) ||
                      t(minRows > 1 ? 'general:row' : 'general:rows'),
                  })}
                </Banner>
              )}
              {showRequired && (
                <Banner>
                  {t('validation:fieldHasNo', { label: getTranslation(labels.plural, i18n) })}
                </Banner>
              )}
            </React.Fragment>
          )}
        </DraggableSortable>
      )}
      {!hasMaxRows && (
        <Fragment>
          <DrawerToggler
            className={`${baseClass}__drawer-toggler`}
            disabled={readOnly || disabled}
            slug={drawerSlug}
          >
            <Button
              buttonStyle="icon-label"
              disabled={readOnly || disabled}
              el="span"
              icon="plus"
              iconPosition="left"
              iconStyle="with-border"
            >
              {t('fields:addLabel', { label: getTranslation(labels.singular, i18n) })}
            </Button>
          </DrawerToggler>
          <BlocksDrawer
            addRow={addRow}
            addRowIndex={rows?.length || 0}
            blocks={blockReferences ?? blocks}
            drawerSlug={drawerSlug}
            labels={labels}
          />
        </Fragment>
      )}
      {AfterInput}
    </div>
  )
}

export const BlocksField = withCondition(BlocksFieldComponent)
