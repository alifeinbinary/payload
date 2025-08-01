/* tslint:disable */
/* eslint-disable */
/**
 * This file was automatically generated by Payload.
 * DO NOT MODIFY IT BY HAND. Instead, modify your source Payload config,
 * and re-run `payload generate:types` to regenerate this file.
 */

/**
 * Supported timezones in IANA format.
 *
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "supportedTimezones".
 */
export type SupportedTimezones =
  | 'Pacific/Midway'
  | 'Pacific/Niue'
  | 'Pacific/Honolulu'
  | 'Pacific/Rarotonga'
  | 'America/Anchorage'
  | 'Pacific/Gambier'
  | 'America/Los_Angeles'
  | 'America/Tijuana'
  | 'America/Denver'
  | 'America/Phoenix'
  | 'America/Chicago'
  | 'America/Guatemala'
  | 'America/New_York'
  | 'America/Bogota'
  | 'America/Caracas'
  | 'America/Santiago'
  | 'America/Buenos_Aires'
  | 'America/Sao_Paulo'
  | 'Atlantic/South_Georgia'
  | 'Atlantic/Azores'
  | 'Atlantic/Cape_Verde'
  | 'Europe/London'
  | 'Europe/Berlin'
  | 'Africa/Lagos'
  | 'Europe/Athens'
  | 'Africa/Cairo'
  | 'Europe/Moscow'
  | 'Asia/Riyadh'
  | 'Asia/Dubai'
  | 'Asia/Baku'
  | 'Asia/Karachi'
  | 'Asia/Tashkent'
  | 'Asia/Calcutta'
  | 'Asia/Dhaka'
  | 'Asia/Almaty'
  | 'Asia/Jakarta'
  | 'Asia/Bangkok'
  | 'Asia/Shanghai'
  | 'Asia/Singapore'
  | 'Asia/Tokyo'
  | 'Asia/Seoul'
  | 'Australia/Brisbane'
  | 'Australia/Sydney'
  | 'Pacific/Guam'
  | 'Pacific/Noumea'
  | 'Pacific/Auckland'
  | 'Pacific/Fiji';

export interface Config {
  auth: {
    users: UserAuthOperations;
  };
  blocks: {};
  collections: {
    richText: RichText;
    'blocks-fields': BlocksField;
    'nested-arrays': NestedArray;
    'nested-field-tables': NestedFieldTable;
    'localized-drafts': LocalizedDraft;
    'localized-date-fields': LocalizedDateField;
    users: User;
    'localized-posts': LocalizedPost;
    'no-localized-fields': NoLocalizedField;
    'array-fields': ArrayField;
    'localized-required': LocalizedRequired;
    'with-localized-relationship': WithLocalizedRelationship;
    'relationship-localized': RelationshipLocalized;
    'cannot-create-default-locale': CannotCreateDefaultLocale;
    nested: Nested;
    groups: Group;
    tabs: Tab;
    'localized-sort': LocalizedSort;
    'blocks-same-name': BlocksSameName;
    'localized-within-localized': LocalizedWithinLocalized;
    'payload-locked-documents': PayloadLockedDocument;
    'payload-preferences': PayloadPreference;
    'payload-migrations': PayloadMigration;
  };
  collectionsJoins: {};
  collectionsSelect: {
    richText: RichTextSelect<false> | RichTextSelect<true>;
    'blocks-fields': BlocksFieldsSelect<false> | BlocksFieldsSelect<true>;
    'nested-arrays': NestedArraysSelect<false> | NestedArraysSelect<true>;
    'nested-field-tables': NestedFieldTablesSelect<false> | NestedFieldTablesSelect<true>;
    'localized-drafts': LocalizedDraftsSelect<false> | LocalizedDraftsSelect<true>;
    'localized-date-fields': LocalizedDateFieldsSelect<false> | LocalizedDateFieldsSelect<true>;
    users: UsersSelect<false> | UsersSelect<true>;
    'localized-posts': LocalizedPostsSelect<false> | LocalizedPostsSelect<true>;
    'no-localized-fields': NoLocalizedFieldsSelect<false> | NoLocalizedFieldsSelect<true>;
    'array-fields': ArrayFieldsSelect<false> | ArrayFieldsSelect<true>;
    'localized-required': LocalizedRequiredSelect<false> | LocalizedRequiredSelect<true>;
    'with-localized-relationship': WithLocalizedRelationshipSelect<false> | WithLocalizedRelationshipSelect<true>;
    'relationship-localized': RelationshipLocalizedSelect<false> | RelationshipLocalizedSelect<true>;
    'cannot-create-default-locale': CannotCreateDefaultLocaleSelect<false> | CannotCreateDefaultLocaleSelect<true>;
    nested: NestedSelect<false> | NestedSelect<true>;
    groups: GroupsSelect<false> | GroupsSelect<true>;
    tabs: TabsSelect<false> | TabsSelect<true>;
    'localized-sort': LocalizedSortSelect<false> | LocalizedSortSelect<true>;
    'blocks-same-name': BlocksSameNameSelect<false> | BlocksSameNameSelect<true>;
    'localized-within-localized': LocalizedWithinLocalizedSelect<false> | LocalizedWithinLocalizedSelect<true>;
    'payload-locked-documents': PayloadLockedDocumentsSelect<false> | PayloadLockedDocumentsSelect<true>;
    'payload-preferences': PayloadPreferencesSelect<false> | PayloadPreferencesSelect<true>;
    'payload-migrations': PayloadMigrationsSelect<false> | PayloadMigrationsSelect<true>;
  };
  db: {
    defaultIDType: string;
  };
  globals: {
    'global-array': GlobalArray;
    'global-text': GlobalText;
  };
  globalsSelect: {
    'global-array': GlobalArraySelect<false> | GlobalArraySelect<true>;
    'global-text': GlobalTextSelect<false> | GlobalTextSelect<true>;
  };
  locale: 'xx' | 'en' | 'es' | 'pt' | 'ar' | 'hu';
  user: User & {
    collection: 'users';
  };
  jobs: {
    tasks: unknown;
    workflows: unknown;
  };
}
export interface UserAuthOperations {
  forgotPassword: {
    email: string;
    password: string;
  };
  login: {
    email: string;
    password: string;
  };
  registerFirstUser: {
    email: string;
    password: string;
  };
  unlock: {
    email: string;
    password: string;
  };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "richText".
 */
export interface RichText {
  id: string;
  richText?:
    | {
        [k: string]: unknown;
      }[]
    | null;
  lexical?: {
    root: {
      type: string;
      children: {
        type: string;
        version: number;
        [k: string]: unknown;
      }[];
      direction: ('ltr' | 'rtl') | null;
      format: 'left' | 'start' | 'center' | 'right' | 'end' | 'justify' | '';
      indent: number;
      version: number;
    };
    [k: string]: unknown;
  } | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blocks-fields".
 */
export interface BlocksField {
  id: string;
  content?:
    | {
        content?:
          | {
              text?: string | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'textBlock';
            }[]
          | null;
        array?:
          | {
              link?: {
                label?: string | null;
              };
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'blockInsideBlock';
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nested-arrays".
 */
export interface NestedArray {
  id: string;
  arrayWithBlocks?:
    | {
        blocksWithinArray?:
          | {
              relationWithinBlock?: (string | null) | LocalizedPost;
              myGroup?: {
                text?: string | null;
              };
              id?: string | null;
              blockName?: string | null;
              blockType: 'someBlock';
            }[]
          | null;
        id?: string | null;
      }[]
    | null;
  arrayWithLocalizedRelation?:
    | {
        localizedRelation?: (string | null) | LocalizedPost;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-posts".
 */
export interface LocalizedPost {
  id: string;
  title?: string | null;
  description?: string | null;
  localizedDescription?: string | null;
  localizedCheckbox?: boolean | null;
  children?: (string | LocalizedPost)[] | null;
  group?: {
    children?: string | null;
  };
  unique?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nested-field-tables".
 */
export interface NestedFieldTable {
  id: string;
  array?:
    | {
        relation?: {
          relationTo: 'localized-posts';
          value: string | LocalizedPost;
        } | null;
        hasManyRelation?: (string | LocalizedPost)[] | null;
        hasManyPolyRelation?:
          | {
              relationTo: 'localized-posts';
              value: string | LocalizedPost;
            }[]
          | null;
        select?: ('one' | 'two' | 'three')[] | null;
        number?: number[] | null;
        text?: string[] | null;
        id?: string | null;
      }[]
    | null;
  blocks?:
    | {
        nestedBlocks?:
          | {
              relation?: {
                relationTo: 'localized-posts';
                value: string | LocalizedPost;
              } | null;
              id?: string | null;
              blockName?: string | null;
              blockType: 'content';
            }[]
          | null;
        array?:
          | {
              relation?: {
                relationTo: 'localized-posts';
                value: string | LocalizedPost;
              } | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'block';
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-drafts".
 */
export interface LocalizedDraft {
  id: string;
  title?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-date-fields".
 */
export interface LocalizedDateField {
  id: string;
  localizedDate?: string | null;
  date?: string | null;
  updatedAt: string;
  createdAt: string;
  _status?: ('draft' | 'published') | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users".
 */
export interface User {
  id: string;
  name?: string | null;
  relation?: (string | null) | LocalizedPost;
  updatedAt: string;
  createdAt: string;
  email: string;
  resetPasswordToken?: string | null;
  resetPasswordExpiration?: string | null;
  salt?: string | null;
  hash?: string | null;
  loginAttempts?: number | null;
  lockUntil?: string | null;
  sessions?:
    | {
        id: string;
        createdAt?: string | null;
        expiresAt: string;
      }[]
    | null;
  password?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "no-localized-fields".
 */
export interface NoLocalizedField {
  id: string;
  text?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "array-fields".
 */
export interface ArrayField {
  id: string;
  items?:
    | {
        text: string;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-required".
 */
export interface LocalizedRequired {
  id: string;
  title: string;
  nav: {
    layout: (
      | {
          text?: string | null;
          nestedArray?:
            | {
                text?: string | null;
                l2?:
                  | {
                      l3?:
                        | {
                            l4?:
                              | {
                                  superNestedText?: string | null;
                                  id?: string | null;
                                }[]
                              | null;
                            id?: string | null;
                          }[]
                        | null;
                      id?: string | null;
                    }[]
                  | null;
                id?: string | null;
              }[]
            | null;
          id?: string | null;
          blockName?: string | null;
          blockType: 'text';
        }
      | {
          number?: number | null;
          id?: string | null;
          blockName?: string | null;
          blockType: 'number';
        }
    )[];
  };
  myTab?: {
    text?: string | null;
    group?: {
      nestedArray2?:
        | {
            nestedText?: string | null;
            id?: string | null;
          }[]
        | null;
      nestedText?: string | null;
    };
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "with-localized-relationship".
 */
export interface WithLocalizedRelationship {
  id: string;
  localizedRelationship?: (string | null) | LocalizedPost;
  localizedRelationHasManyField?: (string | LocalizedPost)[] | null;
  localizedRelationMultiRelationTo?:
    | ({
        relationTo: 'localized-posts';
        value: string | LocalizedPost;
      } | null)
    | ({
        relationTo: 'cannot-create-default-locale';
        value: string | CannotCreateDefaultLocale;
      } | null);
  localizedRelationMultiRelationToHasMany?:
    | (
        | {
            relationTo: 'localized-posts';
            value: string | LocalizedPost;
          }
        | {
            relationTo: 'cannot-create-default-locale';
            value: string | CannotCreateDefaultLocale;
          }
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cannot-create-default-locale".
 */
export interface CannotCreateDefaultLocale {
  id: string;
  name?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "relationship-localized".
 */
export interface RelationshipLocalized {
  id: string;
  relationship?: (string | null) | LocalizedPost;
  relationshipHasMany?: (string | LocalizedPost)[] | null;
  relationMultiRelationTo?:
    | ({
        relationTo: 'localized-posts';
        value: string | LocalizedPost;
      } | null)
    | ({
        relationTo: 'cannot-create-default-locale';
        value: string | CannotCreateDefaultLocale;
      } | null);
  relationMultiRelationToHasMany?:
    | (
        | {
            relationTo: 'localized-posts';
            value: string | LocalizedPost;
          }
        | {
            relationTo: 'cannot-create-default-locale';
            value: string | CannotCreateDefaultLocale;
          }
      )[]
    | null;
  arrayField?:
    | {
        nestedRelation?: (string | null) | LocalizedPost;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nested".
 */
export interface Nested {
  id: string;
  blocks?:
    | {
        someText?: string | null;
        array?:
          | {
              text?: string | null;
              textNotLocalized?: string | null;
              id?: string | null;
            }[]
          | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'block';
      }[]
    | null;
  topLevelArray?:
    | {
        localizedText?: string | null;
        notLocalizedText?: string | null;
        id?: string | null;
      }[]
    | null;
  topLevelArrayLocalized?:
    | {
        text?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "groups".
 */
export interface Group {
  id: string;
  groupLocalizedRow?: {
    text?: string | null;
  };
  groupLocalized?: {
    title?: string | null;
  };
  group?: {
    title?: string | null;
  };
  deep?: {
    array?:
      | {
          title?: string | null;
          id?: string | null;
        }[]
      | null;
    blocks?:
      | {
          title?: string | null;
          id?: string | null;
          blockName?: string | null;
          blockType: 'first';
        }[]
      | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tabs".
 */
export interface Tab {
  id: string;
  tabLocalized?: {
    title?: string | null;
    array?:
      | {
          title?: string | null;
          id?: string | null;
        }[]
      | null;
  };
  tab?: {
    title?: string | null;
  };
  deep?: {
    array?:
      | {
          title?: string | null;
          id?: string | null;
        }[]
      | null;
    blocks?:
      | {
          title?: string | null;
          id?: string | null;
          blockName?: string | null;
          blockType: 'first';
        }[]
      | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-sort".
 */
export interface LocalizedSort {
  id: string;
  title?: string | null;
  date?: string | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blocks-same-name".
 */
export interface BlocksSameName {
  id: string;
  blocks?:
    | (
        | {
            title?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'block_first';
          }
        | {
            title?: string | null;
            id?: string | null;
            blockName?: string | null;
            blockType: 'block_second';
          }
      )[]
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-within-localized".
 */
export interface LocalizedWithinLocalized {
  id: string;
  myTab?: {
    shouldNotBeLocalized?: string | null;
  };
  myArray?:
    | {
        shouldNotBeLocalized?: string | null;
        id?: string | null;
      }[]
    | null;
  myBlocks?:
    | {
        shouldNotBeLocalized?: string | null;
        id?: string | null;
        blockName?: string | null;
        blockType: 'myBlock';
      }[]
    | null;
  myGroup?: {
    shouldNotBeLocalized?: string | null;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents".
 */
export interface PayloadLockedDocument {
  id: string;
  document?:
    | ({
        relationTo: 'richText';
        value: string | RichText;
      } | null)
    | ({
        relationTo: 'blocks-fields';
        value: string | BlocksField;
      } | null)
    | ({
        relationTo: 'nested-arrays';
        value: string | NestedArray;
      } | null)
    | ({
        relationTo: 'nested-field-tables';
        value: string | NestedFieldTable;
      } | null)
    | ({
        relationTo: 'localized-drafts';
        value: string | LocalizedDraft;
      } | null)
    | ({
        relationTo: 'localized-date-fields';
        value: string | LocalizedDateField;
      } | null)
    | ({
        relationTo: 'users';
        value: string | User;
      } | null)
    | ({
        relationTo: 'localized-posts';
        value: string | LocalizedPost;
      } | null)
    | ({
        relationTo: 'no-localized-fields';
        value: string | NoLocalizedField;
      } | null)
    | ({
        relationTo: 'array-fields';
        value: string | ArrayField;
      } | null)
    | ({
        relationTo: 'localized-required';
        value: string | LocalizedRequired;
      } | null)
    | ({
        relationTo: 'with-localized-relationship';
        value: string | WithLocalizedRelationship;
      } | null)
    | ({
        relationTo: 'relationship-localized';
        value: string | RelationshipLocalized;
      } | null)
    | ({
        relationTo: 'cannot-create-default-locale';
        value: string | CannotCreateDefaultLocale;
      } | null)
    | ({
        relationTo: 'nested';
        value: string | Nested;
      } | null)
    | ({
        relationTo: 'groups';
        value: string | Group;
      } | null)
    | ({
        relationTo: 'tabs';
        value: string | Tab;
      } | null)
    | ({
        relationTo: 'localized-sort';
        value: string | LocalizedSort;
      } | null)
    | ({
        relationTo: 'blocks-same-name';
        value: string | BlocksSameName;
      } | null)
    | ({
        relationTo: 'localized-within-localized';
        value: string | LocalizedWithinLocalized;
      } | null);
  globalSlug?: string | null;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences".
 */
export interface PayloadPreference {
  id: string;
  user: {
    relationTo: 'users';
    value: string | User;
  };
  key?: string | null;
  value?:
    | {
        [k: string]: unknown;
      }
    | unknown[]
    | string
    | number
    | boolean
    | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations".
 */
export interface PayloadMigration {
  id: string;
  name?: string | null;
  batch?: number | null;
  updatedAt: string;
  createdAt: string;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "richText_select".
 */
export interface RichTextSelect<T extends boolean = true> {
  richText?: T;
  lexical?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blocks-fields_select".
 */
export interface BlocksFieldsSelect<T extends boolean = true> {
  content?:
    | T
    | {
        blockInsideBlock?:
          | T
          | {
              content?:
                | T
                | {
                    textBlock?:
                      | T
                      | {
                          text?: T;
                          id?: T;
                          blockName?: T;
                        };
                  };
              array?:
                | T
                | {
                    link?:
                      | T
                      | {
                          label?: T;
                        };
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nested-arrays_select".
 */
export interface NestedArraysSelect<T extends boolean = true> {
  arrayWithBlocks?:
    | T
    | {
        blocksWithinArray?:
          | T
          | {
              someBlock?:
                | T
                | {
                    relationWithinBlock?: T;
                    myGroup?:
                      | T
                      | {
                          text?: T;
                        };
                    id?: T;
                    blockName?: T;
                  };
            };
        id?: T;
      };
  arrayWithLocalizedRelation?:
    | T
    | {
        localizedRelation?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nested-field-tables_select".
 */
export interface NestedFieldTablesSelect<T extends boolean = true> {
  array?:
    | T
    | {
        relation?: T;
        hasManyRelation?: T;
        hasManyPolyRelation?: T;
        select?: T;
        number?: T;
        text?: T;
        id?: T;
      };
  blocks?:
    | T
    | {
        block?:
          | T
          | {
              nestedBlocks?:
                | T
                | {
                    content?:
                      | T
                      | {
                          relation?: T;
                          id?: T;
                          blockName?: T;
                        };
                  };
              array?:
                | T
                | {
                    relation?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-drafts_select".
 */
export interface LocalizedDraftsSelect<T extends boolean = true> {
  title?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-date-fields_select".
 */
export interface LocalizedDateFieldsSelect<T extends boolean = true> {
  localizedDate?: T;
  date?: T;
  updatedAt?: T;
  createdAt?: T;
  _status?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "users_select".
 */
export interface UsersSelect<T extends boolean = true> {
  name?: T;
  relation?: T;
  updatedAt?: T;
  createdAt?: T;
  email?: T;
  resetPasswordToken?: T;
  resetPasswordExpiration?: T;
  salt?: T;
  hash?: T;
  loginAttempts?: T;
  lockUntil?: T;
  sessions?:
    | T
    | {
        id?: T;
        createdAt?: T;
        expiresAt?: T;
      };
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-posts_select".
 */
export interface LocalizedPostsSelect<T extends boolean = true> {
  title?: T;
  description?: T;
  localizedDescription?: T;
  localizedCheckbox?: T;
  children?: T;
  group?:
    | T
    | {
        children?: T;
      };
  unique?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "no-localized-fields_select".
 */
export interface NoLocalizedFieldsSelect<T extends boolean = true> {
  text?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "array-fields_select".
 */
export interface ArrayFieldsSelect<T extends boolean = true> {
  items?:
    | T
    | {
        text?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-required_select".
 */
export interface LocalizedRequiredSelect<T extends boolean = true> {
  title?: T;
  nav?:
    | T
    | {
        layout?:
          | T
          | {
              text?:
                | T
                | {
                    text?: T;
                    nestedArray?:
                      | T
                      | {
                          text?: T;
                          l2?:
                            | T
                            | {
                                l3?:
                                  | T
                                  | {
                                      l4?:
                                        | T
                                        | {
                                            superNestedText?: T;
                                            id?: T;
                                          };
                                      id?: T;
                                    };
                                id?: T;
                              };
                          id?: T;
                        };
                    id?: T;
                    blockName?: T;
                  };
              number?:
                | T
                | {
                    number?: T;
                    id?: T;
                    blockName?: T;
                  };
            };
      };
  myTab?:
    | T
    | {
        text?: T;
        group?:
          | T
          | {
              nestedArray2?:
                | T
                | {
                    nestedText?: T;
                    id?: T;
                  };
              nestedText?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "with-localized-relationship_select".
 */
export interface WithLocalizedRelationshipSelect<T extends boolean = true> {
  localizedRelationship?: T;
  localizedRelationHasManyField?: T;
  localizedRelationMultiRelationTo?: T;
  localizedRelationMultiRelationToHasMany?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "relationship-localized_select".
 */
export interface RelationshipLocalizedSelect<T extends boolean = true> {
  relationship?: T;
  relationshipHasMany?: T;
  relationMultiRelationTo?: T;
  relationMultiRelationToHasMany?: T;
  arrayField?:
    | T
    | {
        nestedRelation?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "cannot-create-default-locale_select".
 */
export interface CannotCreateDefaultLocaleSelect<T extends boolean = true> {
  name?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "nested_select".
 */
export interface NestedSelect<T extends boolean = true> {
  blocks?:
    | T
    | {
        block?:
          | T
          | {
              someText?: T;
              array?:
                | T
                | {
                    text?: T;
                    textNotLocalized?: T;
                    id?: T;
                  };
              id?: T;
              blockName?: T;
            };
      };
  topLevelArray?:
    | T
    | {
        localizedText?: T;
        notLocalizedText?: T;
        id?: T;
      };
  topLevelArrayLocalized?:
    | T
    | {
        text?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "groups_select".
 */
export interface GroupsSelect<T extends boolean = true> {
  groupLocalizedRow?:
    | T
    | {
        text?: T;
      };
  groupLocalized?:
    | T
    | {
        title?: T;
      };
  group?:
    | T
    | {
        title?: T;
      };
  deep?:
    | T
    | {
        array?:
          | T
          | {
              title?: T;
              id?: T;
            };
        blocks?:
          | T
          | {
              first?:
                | T
                | {
                    title?: T;
                    id?: T;
                    blockName?: T;
                  };
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "tabs_select".
 */
export interface TabsSelect<T extends boolean = true> {
  tabLocalized?:
    | T
    | {
        title?: T;
        array?:
          | T
          | {
              title?: T;
              id?: T;
            };
      };
  tab?:
    | T
    | {
        title?: T;
      };
  deep?:
    | T
    | {
        array?:
          | T
          | {
              title?: T;
              id?: T;
            };
        blocks?:
          | T
          | {
              first?:
                | T
                | {
                    title?: T;
                    id?: T;
                    blockName?: T;
                  };
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-sort_select".
 */
export interface LocalizedSortSelect<T extends boolean = true> {
  title?: T;
  date?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "blocks-same-name_select".
 */
export interface BlocksSameNameSelect<T extends boolean = true> {
  blocks?:
    | T
    | {
        block_first?:
          | T
          | {
              title?: T;
              id?: T;
              blockName?: T;
            };
        block_second?:
          | T
          | {
              title?: T;
              id?: T;
              blockName?: T;
            };
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "localized-within-localized_select".
 */
export interface LocalizedWithinLocalizedSelect<T extends boolean = true> {
  myTab?:
    | T
    | {
        shouldNotBeLocalized?: T;
      };
  myArray?:
    | T
    | {
        shouldNotBeLocalized?: T;
        id?: T;
      };
  myBlocks?:
    | T
    | {
        myBlock?:
          | T
          | {
              shouldNotBeLocalized?: T;
              id?: T;
              blockName?: T;
            };
      };
  myGroup?:
    | T
    | {
        shouldNotBeLocalized?: T;
      };
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-locked-documents_select".
 */
export interface PayloadLockedDocumentsSelect<T extends boolean = true> {
  document?: T;
  globalSlug?: T;
  user?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-preferences_select".
 */
export interface PayloadPreferencesSelect<T extends boolean = true> {
  user?: T;
  key?: T;
  value?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "payload-migrations_select".
 */
export interface PayloadMigrationsSelect<T extends boolean = true> {
  name?: T;
  batch?: T;
  updatedAt?: T;
  createdAt?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "global-array".
 */
export interface GlobalArray {
  id: string;
  array?:
    | {
        text?: string | null;
        id?: string | null;
      }[]
    | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "global-text".
 */
export interface GlobalText {
  id: string;
  text?: string | null;
  updatedAt?: string | null;
  createdAt?: string | null;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "global-array_select".
 */
export interface GlobalArraySelect<T extends boolean = true> {
  array?:
    | T
    | {
        text?: T;
        id?: T;
      };
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "global-text_select".
 */
export interface GlobalTextSelect<T extends boolean = true> {
  text?: T;
  updatedAt?: T;
  createdAt?: T;
  globalType?: T;
}
/**
 * This interface was referenced by `Config`'s JSON-Schema
 * via the `definition` "auth".
 */
export interface Auth {
  [k: string]: unknown;
}


declare module 'payload' {
  // @ts-ignore 
  export interface GeneratedTypes extends Config {}
}