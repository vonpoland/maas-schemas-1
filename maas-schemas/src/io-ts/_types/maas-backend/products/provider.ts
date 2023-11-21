/*

undefined
MaaS product provider schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import { NonEmptyArray } from 'fp-ts/lib/NonEmptyArray';
import * as t from 'io-ts';
import { nonEmptyArray } from 'io-ts-types/lib/nonEmptyArray';

import * as Common_ffba_ from '../../core/components/common';
import * as Fare_a3ab_ from '../../core/components/fare';
import * as PersonalDataAllowItem_b3f0_ from '../../core/components/personalDataAllowItem';
import * as PersonalDataValidation_1572_ from '../../core/components/personalDataValidation';
import * as PersonalDocumentRequiredItem_b279_ from '../../core/components/personalDocumentRequiredItem';
import * as Units_c404_ from '../../core/components/units';

export type NullBrand = {
  readonly Null: unique symbol;
};
export type NullC = t.BrandC<t.UnknownC, NullBrand>;
export const Null: NullC = t.brand(
  t.unknown,
  (n): n is t.Branded<unknown, NullBrand> => n === null,
  'Null',
);
export type Null = t.TypeOf<typeof Null>;

export type Defined = {} | null;
export class DefinedType extends t.Type<Defined> {
  readonly _tag: 'DefinedType' = 'DefinedType';
  constructor() {
    super(
      'defined',
      (u): u is Defined => typeof u !== 'undefined',
      (u, c) => (this.is(u) ? t.success(u) : t.failure(u, c)),
      t.identity,
    );
  }
}
export type DefinedC = {} & DefinedType;
export const Defined: DefinedC = new DefinedType();

export const schemaId = 'https://schemas.maas.global/maas-backend/products/provider.json';

// ProviderFilterOption
// Product provider filter option
export type ProviderFilterOption = t.Branded<
  ({
    value?: string | Null;
    label?: string;
  } & Record<string, unknown>) & {
    value: Defined;
    label: Defined;
  },
  ProviderFilterOptionBrand
>;
export type ProviderFilterOptionC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            value: t.UnionC<[t.StringC, typeof Null]>;
            label: t.StringC;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        value: typeof Defined;
        label: typeof Defined;
      }>,
    ]
  >,
  ProviderFilterOptionBrand
>;
export const ProviderFilterOption: ProviderFilterOptionC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        value: t.union([t.string, Null]),
        label: t.string,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      value: Defined,
      label: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      value?: string | Null;
      label?: string;
    } & Record<string, unknown>) & {
      value: Defined;
      label: Defined;
    },
    ProviderFilterOptionBrand
  > => true,
  'ProviderFilterOption',
);
export type ProviderFilterOptionBrand = {
  readonly ProviderFilterOption: unique symbol;
};

// ProviderFilter
// Product provider filter
export type ProviderFilter = t.Branded<
  ({
    name?: string;
    label?: string;
    default?: ProviderFilterOption | Null;
    selectionOptions?: Array<ProviderFilterOption>;
  } & Record<string, unknown>) & {
    name: Defined;
    label: Defined;
  },
  ProviderFilterBrand
>;
export type ProviderFilterC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            name: t.StringC;
            label: t.StringC;
            default: t.UnionC<[typeof ProviderFilterOption, typeof Null]>;
            selectionOptions: t.ArrayC<typeof ProviderFilterOption>;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        name: typeof Defined;
        label: typeof Defined;
      }>,
    ]
  >,
  ProviderFilterBrand
>;
export const ProviderFilter: ProviderFilterC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        name: t.string,
        label: t.string,
        default: t.union([ProviderFilterOption, Null]),
        selectionOptions: t.array(ProviderFilterOption),
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      name: Defined,
      label: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      name?: string;
      label?: string;
      default?: ProviderFilterOption | Null;
      selectionOptions?: Array<ProviderFilterOption>;
    } & Record<string, unknown>) & {
      name: Defined;
      label: Defined;
    },
    ProviderFilterBrand
  > => true,
  'ProviderFilter',
);
export type ProviderFilterBrand = {
  readonly ProviderFilter: unique symbol;
};

// Selection
// Optional parameter for selections
export type Selection = t.Branded<
  ({
    id?: string;
    name?: string;
    type?: 'oneOf' | 'someOf' | 'allOf' | 'oneOrNoneOf' | 'someOrNoneOf';
    userSelectable?: boolean;
    inputs?: Array<
      {
        id?: string;
        name?: string;
        type?: 'string' | 'number' | 'boolean' | 'station';
        default?: string | number | boolean;
      } & {
        id: Defined;
        name: Defined;
        type: Defined;
      }
    >;
  } & Record<string, unknown>) & {
    id: Defined;
    name: Defined;
    inputs: Defined;
  },
  SelectionBrand
>;
export type SelectionC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            id: t.StringC;
            name: t.StringC;
            type: t.UnionC<
              [
                t.LiteralC<'oneOf'>,
                t.LiteralC<'someOf'>,
                t.LiteralC<'allOf'>,
                t.LiteralC<'oneOrNoneOf'>,
                t.LiteralC<'someOrNoneOf'>,
              ]
            >;
            userSelectable: t.BooleanC;
            inputs: t.ArrayC<
              t.IntersectionC<
                [
                  t.PartialC<{
                    id: t.StringC;
                    name: t.StringC;
                    type: t.UnionC<
                      [
                        t.LiteralC<'string'>,
                        t.LiteralC<'number'>,
                        t.LiteralC<'boolean'>,
                        t.LiteralC<'station'>,
                      ]
                    >;
                    default: t.UnionC<[t.StringC, t.NumberC, t.BooleanC]>;
                  }>,
                  t.TypeC<{
                    id: typeof Defined;
                    name: typeof Defined;
                    type: typeof Defined;
                  }>,
                ]
              >
            >;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        id: typeof Defined;
        name: typeof Defined;
        inputs: typeof Defined;
      }>,
    ]
  >,
  SelectionBrand
>;
export const Selection: SelectionC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        id: t.string,
        name: t.string,
        type: t.union([
          t.literal('oneOf'),
          t.literal('someOf'),
          t.literal('allOf'),
          t.literal('oneOrNoneOf'),
          t.literal('someOrNoneOf'),
        ]),
        userSelectable: t.boolean,
        inputs: t.array(
          t.intersection([
            t.partial({
              id: t.string,
              name: t.string,
              type: t.union([
                t.literal('string'),
                t.literal('number'),
                t.literal('boolean'),
                t.literal('station'),
              ]),
              default: t.union([t.string, t.number, t.boolean]),
            }),
            t.type({
              id: Defined,
              name: Defined,
              type: Defined,
            }),
          ]),
        ),
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      id: Defined,
      name: Defined,
      inputs: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      id?: string;
      name?: string;
      type?: 'oneOf' | 'someOf' | 'allOf' | 'oneOrNoneOf' | 'someOrNoneOf';
      userSelectable?: boolean;
      inputs?: Array<
        {
          id?: string;
          name?: string;
          type?: 'string' | 'number' | 'boolean' | 'station';
          default?: string | number | boolean;
        } & {
          id: Defined;
          name: Defined;
          type: Defined;
        }
      >;
    } & Record<string, unknown>) & {
      id: Defined;
      name: Defined;
      inputs: Defined;
    },
    SelectionBrand
  > => true,
  'Selection',
);
export type SelectionBrand = {
  readonly Selection: unique symbol;
};

// MessageToDriver
// Optional parameter for a message to driver
export type MessageToDriver = t.Branded<
  ({
    message?: ({
      property?: string;
      maxLength?: number;
    } & Record<string, unknown>) & {
      property: Defined;
      maxLength: Defined;
    };
  } & Record<string, unknown>) & {
    message: Defined;
  },
  MessageToDriverBrand
>;
export type MessageToDriverC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            message: t.IntersectionC<
              [
                t.IntersectionC<
                  [
                    t.PartialC<{
                      property: t.StringC;
                      maxLength: t.NumberC;
                    }>,
                    t.RecordC<t.StringC, t.UnknownC>,
                  ]
                >,
                t.TypeC<{
                  property: typeof Defined;
                  maxLength: typeof Defined;
                }>,
              ]
            >;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        message: typeof Defined;
      }>,
    ]
  >,
  MessageToDriverBrand
>;
export const MessageToDriver: MessageToDriverC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        message: t.intersection([
          t.intersection([
            t.partial({
              property: t.string,
              maxLength: t.number,
            }),
            t.record(t.string, t.unknown),
          ]),
          t.type({
            property: Defined,
            maxLength: Defined,
          }),
        ]),
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      message: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      message?: ({
        property?: string;
        maxLength?: number;
      } & Record<string, unknown>) & {
        property: Defined;
        maxLength: Defined;
      };
    } & Record<string, unknown>) & {
      message: Defined;
    },
    MessageToDriverBrand
  > => true,
  'MessageToDriver',
);
export type MessageToDriverBrand = {
  readonly MessageToDriver: unique symbol;
};

// BookingPeriod
// Optional parameter for default booking period
export type BookingPeriod = t.Branded<
  ({
    searchDefault?: number;
  } & Record<string, unknown>) & {
    searchDefault: Defined;
  },
  BookingPeriodBrand
>;
export type BookingPeriodC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            searchDefault: t.NumberC;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        searchDefault: typeof Defined;
      }>,
    ]
  >,
  BookingPeriodBrand
>;
export const BookingPeriod: BookingPeriodC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        searchDefault: t.number,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      searchDefault: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      searchDefault?: number;
    } & Record<string, unknown>) & {
      searchDefault: Defined;
    },
    BookingPeriodBrand
  > => true,
  'BookingPeriod',
);
export type BookingPeriodBrand = {
  readonly BookingPeriod: unique symbol;
};

// GradualRadiusOption
// Optional parameter for gradual radius searching
export type GradualRadiusOption = t.Branded<
  ({
    gradualRadius?: number;
    maxRadius?: number;
  } & Record<string, unknown>) & {
    gradualRadius: Defined;
    maxRadius: Defined;
  },
  GradualRadiusOptionBrand
>;
export type GradualRadiusOptionC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            gradualRadius: t.NumberC;
            maxRadius: t.NumberC;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        gradualRadius: typeof Defined;
        maxRadius: typeof Defined;
      }>,
    ]
  >,
  GradualRadiusOptionBrand
>;
export const GradualRadiusOption: GradualRadiusOptionC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        gradualRadius: t.number,
        maxRadius: t.number,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      gradualRadius: Defined,
      maxRadius: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      gradualRadius?: number;
      maxRadius?: number;
    } & Record<string, unknown>) & {
      gradualRadius: Defined;
      maxRadius: Defined;
    },
    GradualRadiusOptionBrand
  > => true,
  'GradualRadiusOption',
);
export type GradualRadiusOptionBrand = {
  readonly GradualRadiusOption: unique symbol;
};

// Provider
// The default export. More information at the top.
export type Provider = t.Branded<
  {
    name?: string;
    agencyId?: Common_ffba_.AgencyId;
    groupId?: string;
    hidden?: boolean;
    branding?: {
      primaryColor?: string;
      secondaryColor?: string;
      icon?: Units_c404_.Url;
      logoSolidColor?: Units_c404_.Url;
      logoFullColor?: Units_c404_.Url;
    } & Record<string, unknown>;
    features?: {
      ticket?: boolean;
      stationsList?: boolean;
      stationsRetrieve?: boolean;
      packagesList?: boolean;
      options?: boolean;
      journeyPlanner?: boolean;
    } & {
      ticket: Defined;
      stationsList: Defined;
      stationsRetrieve: Defined;
    };
    extra?: {
      radius?: {
        fixedFareAmount?: number;
        fixedFareCurrency?:
          | Units_c404_.Currency
          | Common_ffba_.MetaCurrency
          | Fare_a3ab_.TokenId;
        maxRadiusMetres?: number;
        description?: string;
      } & {
        fixedFareAmount: Defined;
        fixedFareCurrency: Defined;
        maxRadiusMetres: Defined;
      };
      prebooking?: ({
        isSupported?: boolean;
        minIntervalUntilBooking?: number;
        maxIntervalUntilBooking?: number;
      } & Record<string, unknown>) & {
        isSupported: Defined;
        minIntervalUntilBooking: Defined;
        maxIntervalUntilBooking: Defined;
      };
    };
    personalDataOptionsAllow?: Array<PersonalDataAllowItem_b3f0_.PersonalDataAllowItem>;
    personalDataCreateAllow?: Array<PersonalDataAllowItem_b3f0_.PersonalDataAllowItem>;
    personalDataValidations?: Array<PersonalDataValidation_1572_.PersonalDataValidation>;
    requiredPersonalDocuments?: Array<PersonalDocumentRequiredItem_b279_.PersonalDocumentRequiredItem>;
    optionalParameters?: Array<
      Selection | MessageToDriver | BookingPeriod | GradualRadiusOption
    >;
    disruption?: Record<string, unknown> & Record<string, unknown>;
    created?: Units_c404_.Time;
    filters?: Array<ProviderFilter>;
  } & {
    name: Defined;
    agencyId: Defined;
    groupId: Defined;
    branding: Defined;
    hidden: Defined;
    features: Defined;
    personalDataOptionsAllow: Defined;
    personalDataCreateAllow: Defined;
    optionalParameters: Defined;
  },
  ProviderBrand
>;
export type ProviderC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        name: t.StringC;
        agencyId: typeof Common_ffba_.AgencyId;
        groupId: t.StringC;
        hidden: t.BooleanC;
        branding: t.IntersectionC<
          [
            t.PartialC<{
              primaryColor: t.StringC;
              secondaryColor: t.StringC;
              icon: typeof Units_c404_.Url;
              logoSolidColor: typeof Units_c404_.Url;
              logoFullColor: typeof Units_c404_.Url;
            }>,
            t.RecordC<t.StringC, t.UnknownC>,
          ]
        >;
        features: t.IntersectionC<
          [
            t.PartialC<{
              ticket: t.BooleanC;
              stationsList: t.BooleanC;
              stationsRetrieve: t.BooleanC;
              packagesList: t.BooleanC;
              options: t.BooleanC;
              journeyPlanner: t.BooleanC;
            }>,
            t.TypeC<{
              ticket: typeof Defined;
              stationsList: typeof Defined;
              stationsRetrieve: typeof Defined;
            }>,
          ]
        >;
        extra: t.PartialC<{
          radius: t.IntersectionC<
            [
              t.PartialC<{
                fixedFareAmount: t.NumberC;
                fixedFareCurrency: t.UnionC<
                  [
                    typeof Units_c404_.Currency,
                    typeof Common_ffba_.MetaCurrency,
                    typeof Fare_a3ab_.TokenId,
                  ]
                >;
                maxRadiusMetres: t.NumberC;
                description: t.StringC;
              }>,
              t.TypeC<{
                fixedFareAmount: typeof Defined;
                fixedFareCurrency: typeof Defined;
                maxRadiusMetres: typeof Defined;
              }>,
            ]
          >;
          prebooking: t.IntersectionC<
            [
              t.IntersectionC<
                [
                  t.PartialC<{
                    isSupported: t.BooleanC;
                    minIntervalUntilBooking: t.NumberC;
                    maxIntervalUntilBooking: t.NumberC;
                  }>,
                  t.RecordC<t.StringC, t.UnknownC>,
                ]
              >,
              t.TypeC<{
                isSupported: typeof Defined;
                minIntervalUntilBooking: typeof Defined;
                maxIntervalUntilBooking: typeof Defined;
              }>,
            ]
          >;
        }>;
        personalDataOptionsAllow: t.ArrayC<
          typeof PersonalDataAllowItem_b3f0_.PersonalDataAllowItem
        >;
        personalDataCreateAllow: t.ArrayC<
          typeof PersonalDataAllowItem_b3f0_.PersonalDataAllowItem
        >;
        personalDataValidations: t.ArrayC<
          typeof PersonalDataValidation_1572_.PersonalDataValidation
        >;
        requiredPersonalDocuments: t.ArrayC<
          typeof PersonalDocumentRequiredItem_b279_.PersonalDocumentRequiredItem
        >;
        optionalParameters: t.ArrayC<
          t.UnionC<
            [
              typeof Selection,
              typeof MessageToDriver,
              typeof BookingPeriod,
              typeof GradualRadiusOption,
            ]
          >
        >;
        disruption: t.IntersectionC<[t.UnknownRecordC, t.RecordC<t.StringC, t.UnknownC>]>;
        created: typeof Units_c404_.Time;
        filters: t.ArrayC<typeof ProviderFilter>;
      }>,
      t.TypeC<{
        name: typeof Defined;
        agencyId: typeof Defined;
        groupId: typeof Defined;
        branding: typeof Defined;
        hidden: typeof Defined;
        features: typeof Defined;
        personalDataOptionsAllow: typeof Defined;
        personalDataCreateAllow: typeof Defined;
        optionalParameters: typeof Defined;
      }>,
    ]
  >,
  ProviderBrand
>;
export const Provider: ProviderC = t.brand(
  t.intersection([
    t.partial({
      name: t.string,
      agencyId: Common_ffba_.AgencyId,
      groupId: t.string,
      hidden: t.boolean,
      branding: t.intersection([
        t.partial({
          primaryColor: t.string,
          secondaryColor: t.string,
          icon: Units_c404_.Url,
          logoSolidColor: Units_c404_.Url,
          logoFullColor: Units_c404_.Url,
        }),
        t.record(t.string, t.unknown),
      ]),
      features: t.intersection([
        t.partial({
          ticket: t.boolean,
          stationsList: t.boolean,
          stationsRetrieve: t.boolean,
          packagesList: t.boolean,
          options: t.boolean,
          journeyPlanner: t.boolean,
        }),
        t.type({
          ticket: Defined,
          stationsList: Defined,
          stationsRetrieve: Defined,
        }),
      ]),
      extra: t.partial({
        radius: t.intersection([
          t.partial({
            fixedFareAmount: t.number,
            fixedFareCurrency: t.union([
              Units_c404_.Currency,
              Common_ffba_.MetaCurrency,
              Fare_a3ab_.TokenId,
            ]),
            maxRadiusMetres: t.number,
            description: t.string,
          }),
          t.type({
            fixedFareAmount: Defined,
            fixedFareCurrency: Defined,
            maxRadiusMetres: Defined,
          }),
        ]),
        prebooking: t.intersection([
          t.intersection([
            t.partial({
              isSupported: t.boolean,
              minIntervalUntilBooking: t.number,
              maxIntervalUntilBooking: t.number,
            }),
            t.record(t.string, t.unknown),
          ]),
          t.type({
            isSupported: Defined,
            minIntervalUntilBooking: Defined,
            maxIntervalUntilBooking: Defined,
          }),
        ]),
      }),
      personalDataOptionsAllow: t.array(
        PersonalDataAllowItem_b3f0_.PersonalDataAllowItem,
      ),
      personalDataCreateAllow: t.array(PersonalDataAllowItem_b3f0_.PersonalDataAllowItem),
      personalDataValidations: t.array(
        PersonalDataValidation_1572_.PersonalDataValidation,
      ),
      requiredPersonalDocuments: t.array(
        PersonalDocumentRequiredItem_b279_.PersonalDocumentRequiredItem,
      ),
      optionalParameters: t.array(
        t.union([Selection, MessageToDriver, BookingPeriod, GradualRadiusOption]),
      ),
      disruption: t.intersection([t.UnknownRecord, t.record(t.string, t.unknown)]),
      created: Units_c404_.Time,
      filters: t.array(ProviderFilter),
    }),
    t.type({
      name: Defined,
      agencyId: Defined,
      groupId: Defined,
      branding: Defined,
      hidden: Defined,
      features: Defined,
      personalDataOptionsAllow: Defined,
      personalDataCreateAllow: Defined,
      optionalParameters: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      name?: string;
      agencyId?: Common_ffba_.AgencyId;
      groupId?: string;
      hidden?: boolean;
      branding?: {
        primaryColor?: string;
        secondaryColor?: string;
        icon?: Units_c404_.Url;
        logoSolidColor?: Units_c404_.Url;
        logoFullColor?: Units_c404_.Url;
      } & Record<string, unknown>;
      features?: {
        ticket?: boolean;
        stationsList?: boolean;
        stationsRetrieve?: boolean;
        packagesList?: boolean;
        options?: boolean;
        journeyPlanner?: boolean;
      } & {
        ticket: Defined;
        stationsList: Defined;
        stationsRetrieve: Defined;
      };
      extra?: {
        radius?: {
          fixedFareAmount?: number;
          fixedFareCurrency?:
            | Units_c404_.Currency
            | Common_ffba_.MetaCurrency
            | Fare_a3ab_.TokenId;
          maxRadiusMetres?: number;
          description?: string;
        } & {
          fixedFareAmount: Defined;
          fixedFareCurrency: Defined;
          maxRadiusMetres: Defined;
        };
        prebooking?: ({
          isSupported?: boolean;
          minIntervalUntilBooking?: number;
          maxIntervalUntilBooking?: number;
        } & Record<string, unknown>) & {
          isSupported: Defined;
          minIntervalUntilBooking: Defined;
          maxIntervalUntilBooking: Defined;
        };
      };
      personalDataOptionsAllow?: Array<PersonalDataAllowItem_b3f0_.PersonalDataAllowItem>;
      personalDataCreateAllow?: Array<PersonalDataAllowItem_b3f0_.PersonalDataAllowItem>;
      personalDataValidations?: Array<PersonalDataValidation_1572_.PersonalDataValidation>;
      requiredPersonalDocuments?: Array<PersonalDocumentRequiredItem_b279_.PersonalDocumentRequiredItem>;
      optionalParameters?: Array<
        Selection | MessageToDriver | BookingPeriod | GradualRadiusOption
      >;
      disruption?: Record<string, unknown> & Record<string, unknown>;
      created?: Units_c404_.Time;
      filters?: Array<ProviderFilter>;
    } & {
      name: Defined;
      agencyId: Defined;
      groupId: Defined;
      branding: Defined;
      hidden: Defined;
      features: Defined;
      personalDataOptionsAllow: Defined;
      personalDataCreateAllow: Defined;
      optionalParameters: Defined;
    },
    ProviderBrand
  > => true,
  'Provider',
);
export type ProviderBrand = {
  readonly Provider: unique symbol;
};
/** require('io-ts-validator').validator(nonEmptyArray(Provider)).decodeSync(examplesProvider) // => examplesProvider */
export const examplesProvider: NonEmptyArray<Provider> = [
  {
    name: 'providerName',
    agencyId: 'someAgency',
    groupId: 'someGroupId',
    hidden: false,
    branding: {},
    features: { ticket: true, stationsList: true, stationsRetrieve: true },
    filters: [
      {
        name: 'ticketType',
        label: 'ticketTypeLabel',
        selectionOptions: [
          { value: null, label: 'PLEASE_CHOOSE' },
          { value: 'ordinary', label: 'TYPE_ORDINARY' },
        ],
        default: { value: null, label: 'PLEASE_CHOOSE' },
      },
      {
        name: 'ticketZone',
        label: 'ticketZoneLabel',
        selectionOptions: [],
        default: null,
      },
    ],
    personalDataOptionsAllow: [],
    personalDataCreateAllow: [],
    optionalParameters: [
      {
        id: 'someId',
        name: 'someName',
        type: 'oneOrNoneOf',
        userSelectable: true,
        inputs: [
          { id: 'via', name: 'Via', type: 'station' },
          { id: 'avoid', name: 'Avoid', type: 'station' },
        ],
      },
      { message: { property: 'messageToDriver', maxLength: 120 } },
      { searchDefault: 120 },
      { gradualRadius: 120, maxRadius: 300 },
    ],
  },
] as unknown as NonEmptyArray<Provider>;

export default Provider;

// Success
