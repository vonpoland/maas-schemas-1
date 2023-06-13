/*

undefined
Product option V2 for an itinerary, is either an existing booking pointer or a new booking instruction

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as BookingMeta_c057_ from './booking-meta';
import * as Configurator_2e96_ from './components/configurator';
import * as Fare_a3ab_ from './components/fare';
import * as Terms_bb95_ from './components/terms';
import * as Units_c404_ from './components/units';
import * as Leg_1308_ from './leg';
import * as Product_d23e_ from './product';

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

export const schemaId = 'https://schemas.maas.global/core/product-optionV2.json';

// Ref
// numeric key for connecting productOption with leg.productOption
export type Ref = t.Branded<number, RefBrand>;
export type RefC = t.BrandC<t.NumberC, RefBrand>;
export const Ref: RefC = t.brand(
  t.number,
  (x): x is t.Branded<number, RefBrand> => Number.isInteger(x),
  'Ref',
);
export type RefBrand = {
  readonly Ref: unique symbol;
};
/** require('io-ts-validator').validator(Ref).decodeSync(minimumRef) // => minimumRef */
export const minimumRef: Ref = 0 as unknown as Ref;

// ProductOptionWithFares
// Product option with fares
export type ProductOptionWithFares = t.Branded<
  ({
    ref?: number;
    customerId?: Units_c404_.IdentityId;
    type?: 'BOOKING_BOOKABLE';
    product?: Product_d23e_.Product;
    terms?: Terms_bb95_.Terms;
    meta?: BookingMeta_c057_.BookingMeta;
    fares?: Array<Fare_a3ab_.Fare>;
  } & Record<string, unknown>) & {
    ref: Defined;
    customerId: Defined;
    type: Defined;
    product: Defined;
    terms: Defined;
    meta: Defined;
    fares: Defined;
  },
  ProductOptionWithFaresBrand
>;
export type ProductOptionWithFaresC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            ref: t.NumberC;
            customerId: typeof Units_c404_.IdentityId;
            type: t.LiteralC<'BOOKING_BOOKABLE'>;
            product: typeof Product_d23e_.Product;
            terms: typeof Terms_bb95_.Terms;
            meta: typeof BookingMeta_c057_.BookingMeta;
            fares: t.ArrayC<typeof Fare_a3ab_.Fare>;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        ref: typeof Defined;
        customerId: typeof Defined;
        type: typeof Defined;
        product: typeof Defined;
        terms: typeof Defined;
        meta: typeof Defined;
        fares: typeof Defined;
      }>,
    ]
  >,
  ProductOptionWithFaresBrand
>;
export const ProductOptionWithFares: ProductOptionWithFaresC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        ref: t.number,
        customerId: Units_c404_.IdentityId,
        type: t.literal('BOOKING_BOOKABLE'),
        product: Product_d23e_.Product,
        terms: Terms_bb95_.Terms,
        meta: BookingMeta_c057_.BookingMeta,
        fares: t.array(Fare_a3ab_.Fare),
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      ref: Defined,
      customerId: Defined,
      type: Defined,
      product: Defined,
      terms: Defined,
      meta: Defined,
      fares: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      ref?: number;
      customerId?: Units_c404_.IdentityId;
      type?: 'BOOKING_BOOKABLE';
      product?: Product_d23e_.Product;
      terms?: Terms_bb95_.Terms;
      meta?: BookingMeta_c057_.BookingMeta;
      fares?: Array<Fare_a3ab_.Fare>;
    } & Record<string, unknown>) & {
      ref: Defined;
      customerId: Defined;
      type: Defined;
      product: Defined;
      terms: Defined;
      meta: Defined;
      fares: Defined;
    },
    ProductOptionWithFaresBrand
  > => true,
  'ProductOptionWithFares',
);
export type ProductOptionWithFaresBrand = {
  readonly ProductOptionWithFares: unique symbol;
};

// ProductOptionWithFaresExistingBooking
// The purpose of this remains a mystery
export type ProductOptionWithFaresExistingBooking = t.Branded<
  ProductOptionWithFares &
    (({
      bookingId?: Units_c404_.Uuid;
    } & Record<string, unknown>) & {
      bookingId: Defined;
    }),
  ProductOptionWithFaresExistingBookingBrand
>;
export type ProductOptionWithFaresExistingBookingC = t.BrandC<
  t.IntersectionC<
    [
      typeof ProductOptionWithFares,
      t.IntersectionC<
        [
          t.IntersectionC<
            [
              t.PartialC<{
                bookingId: typeof Units_c404_.Uuid;
              }>,
              t.RecordC<t.StringC, t.UnknownC>,
            ]
          >,
          t.TypeC<{
            bookingId: typeof Defined;
          }>,
        ]
      >,
    ]
  >,
  ProductOptionWithFaresExistingBookingBrand
>;
export const ProductOptionWithFaresExistingBooking: ProductOptionWithFaresExistingBookingC =
  t.brand(
    t.intersection([
      ProductOptionWithFares,
      t.intersection([
        t.intersection([
          t.partial({
            bookingId: Units_c404_.Uuid,
          }),
          t.record(t.string, t.unknown),
        ]),
        t.type({
          bookingId: Defined,
        }),
      ]),
    ]),
    (
      x,
    ): x is t.Branded<
      ProductOptionWithFares &
        (({
          bookingId?: Units_c404_.Uuid;
        } & Record<string, unknown>) & {
          bookingId: Defined;
        }),
      ProductOptionWithFaresExistingBookingBrand
    > => true,
    'ProductOptionWithFaresExistingBooking',
  );
export type ProductOptionWithFaresExistingBookingBrand = {
  readonly ProductOptionWithFaresExistingBooking: unique symbol;
};

// ProductOptionWithConfigurator
// Product option with configurator
export type ProductOptionWithConfigurator = t.Branded<
  ({
    ref?: Ref;
    customerId?: Units_c404_.IdentityId;
    type?: 'BOOKING_BOOKABLE' | 'BOOKING_ESTIMATABLE';
    product?: Product_d23e_.Product;
    terms?: Terms_bb95_.Terms;
    meta?: BookingMeta_c057_.BookingMeta;
    configurator?: Configurator_2e96_.Configurator;
  } & Record<string, unknown>) & {
    ref: Defined;
    customerId: Defined;
    type: Defined;
    product: Defined;
    terms: Defined;
    meta: Defined;
    configurator: Defined;
  },
  ProductOptionWithConfiguratorBrand
>;
export type ProductOptionWithConfiguratorC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            ref: typeof Ref;
            customerId: typeof Units_c404_.IdentityId;
            type: t.UnionC<
              [t.LiteralC<'BOOKING_BOOKABLE'>, t.LiteralC<'BOOKING_ESTIMATABLE'>]
            >;
            product: typeof Product_d23e_.Product;
            terms: typeof Terms_bb95_.Terms;
            meta: typeof BookingMeta_c057_.BookingMeta;
            configurator: typeof Configurator_2e96_.Configurator;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        ref: typeof Defined;
        customerId: typeof Defined;
        type: typeof Defined;
        product: typeof Defined;
        terms: typeof Defined;
        meta: typeof Defined;
        configurator: typeof Defined;
      }>,
    ]
  >,
  ProductOptionWithConfiguratorBrand
>;
export const ProductOptionWithConfigurator: ProductOptionWithConfiguratorC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        ref: Ref,
        customerId: Units_c404_.IdentityId,
        type: t.union([t.literal('BOOKING_BOOKABLE'), t.literal('BOOKING_ESTIMATABLE')]),
        product: Product_d23e_.Product,
        terms: Terms_bb95_.Terms,
        meta: BookingMeta_c057_.BookingMeta,
        configurator: Configurator_2e96_.Configurator,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      ref: Defined,
      customerId: Defined,
      type: Defined,
      product: Defined,
      terms: Defined,
      meta: Defined,
      configurator: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      ref?: Ref;
      customerId?: Units_c404_.IdentityId;
      type?: 'BOOKING_BOOKABLE' | 'BOOKING_ESTIMATABLE';
      product?: Product_d23e_.Product;
      terms?: Terms_bb95_.Terms;
      meta?: BookingMeta_c057_.BookingMeta;
      configurator?: Configurator_2e96_.Configurator;
    } & Record<string, unknown>) & {
      ref: Defined;
      customerId: Defined;
      type: Defined;
      product: Defined;
      terms: Defined;
      meta: Defined;
      configurator: Defined;
    },
    ProductOptionWithConfiguratorBrand
  > => true,
  'ProductOptionWithConfigurator',
);
export type ProductOptionWithConfiguratorBrand = {
  readonly ProductOptionWithConfigurator: unique symbol;
};

// ProductOptionWithConfiguratorExistingBooking
// The purpose of this remains a mystery
export type ProductOptionWithConfiguratorExistingBooking = t.Branded<
  ProductOptionWithConfigurator &
    (({
      bookingId?: Units_c404_.Uuid;
    } & Record<string, unknown>) & {
      bookingId: Defined;
    }),
  ProductOptionWithConfiguratorExistingBookingBrand
>;
export type ProductOptionWithConfiguratorExistingBookingC = t.BrandC<
  t.IntersectionC<
    [
      typeof ProductOptionWithConfigurator,
      t.IntersectionC<
        [
          t.IntersectionC<
            [
              t.PartialC<{
                bookingId: typeof Units_c404_.Uuid;
              }>,
              t.RecordC<t.StringC, t.UnknownC>,
            ]
          >,
          t.TypeC<{
            bookingId: typeof Defined;
          }>,
        ]
      >,
    ]
  >,
  ProductOptionWithConfiguratorExistingBookingBrand
>;
export const ProductOptionWithConfiguratorExistingBooking: ProductOptionWithConfiguratorExistingBookingC =
  t.brand(
    t.intersection([
      ProductOptionWithConfigurator,
      t.intersection([
        t.intersection([
          t.partial({
            bookingId: Units_c404_.Uuid,
          }),
          t.record(t.string, t.unknown),
        ]),
        t.type({
          bookingId: Defined,
        }),
      ]),
    ]),
    (
      x,
    ): x is t.Branded<
      ProductOptionWithConfigurator &
        (({
          bookingId?: Units_c404_.Uuid;
        } & Record<string, unknown>) & {
          bookingId: Defined;
        }),
      ProductOptionWithConfiguratorExistingBookingBrand
    > => true,
    'ProductOptionWithConfiguratorExistingBooking',
  );
export type ProductOptionWithConfiguratorExistingBookingBrand = {
  readonly ProductOptionWithConfiguratorExistingBooking: unique symbol;
};

// ProductOptionUnnecessary
// No booking necessary for the associated leg
export type ProductOptionUnnecessary = t.Branded<
  ({
    ref?: number;
    customerId?: Units_c404_.IdentityId;
    type?: 'BOOKING_UNNECESSARY';
  } & Record<string, unknown>) & {
    ref: Defined;
    customerId: Defined;
    type: Defined;
  },
  ProductOptionUnnecessaryBrand
>;
export type ProductOptionUnnecessaryC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            ref: t.NumberC;
            customerId: typeof Units_c404_.IdentityId;
            type: t.LiteralC<'BOOKING_UNNECESSARY'>;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        ref: typeof Defined;
        customerId: typeof Defined;
        type: typeof Defined;
      }>,
    ]
  >,
  ProductOptionUnnecessaryBrand
>;
export const ProductOptionUnnecessary: ProductOptionUnnecessaryC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        ref: t.number,
        customerId: Units_c404_.IdentityId,
        type: t.literal('BOOKING_UNNECESSARY'),
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      ref: Defined,
      customerId: Defined,
      type: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      ref?: number;
      customerId?: Units_c404_.IdentityId;
      type?: 'BOOKING_UNNECESSARY';
    } & Record<string, unknown>) & {
      ref: Defined;
      customerId: Defined;
      type: Defined;
    },
    ProductOptionUnnecessaryBrand
  > => true,
  'ProductOptionUnnecessary',
);
export type ProductOptionUnnecessaryBrand = {
  readonly ProductOptionUnnecessary: unique symbol;
};

// ProductOptionUnavailable
// A booking is required but cannot be fulfilled by the system
export type ProductOptionUnavailable = t.Branded<
  ({
    ref?: number;
    customerId?: Units_c404_.IdentityId;
    type?: 'BOOKING_UNAVAILABLE';
    agencyId?: Leg_1308_.AgencyId;
  } & Record<string, unknown>) & {
    ref: Defined;
    customerId: Defined;
    type: Defined;
    agencyId: Defined;
  },
  ProductOptionUnavailableBrand
>;
export type ProductOptionUnavailableC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            ref: t.NumberC;
            customerId: typeof Units_c404_.IdentityId;
            type: t.LiteralC<'BOOKING_UNAVAILABLE'>;
            agencyId: typeof Leg_1308_.AgencyId;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        ref: typeof Defined;
        customerId: typeof Defined;
        type: typeof Defined;
        agencyId: typeof Defined;
      }>,
    ]
  >,
  ProductOptionUnavailableBrand
>;
export const ProductOptionUnavailable: ProductOptionUnavailableC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        ref: t.number,
        customerId: Units_c404_.IdentityId,
        type: t.literal('BOOKING_UNAVAILABLE'),
        agencyId: Leg_1308_.AgencyId,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      ref: Defined,
      customerId: Defined,
      type: Defined,
      agencyId: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      ref?: number;
      customerId?: Units_c404_.IdentityId;
      type?: 'BOOKING_UNAVAILABLE';
      agencyId?: Leg_1308_.AgencyId;
    } & Record<string, unknown>) & {
      ref: Defined;
      customerId: Defined;
      type: Defined;
      agencyId: Defined;
    },
    ProductOptionUnavailableBrand
  > => true,
  'ProductOptionUnavailable',
);
export type ProductOptionUnavailableBrand = {
  readonly ProductOptionUnavailable: unique symbol;
};

// ProductOptionAvailable
// A booking is required but it should be deferred
export type ProductOptionAvailable = t.Branded<
  ({
    ref?: number;
    customerId?: Units_c404_.IdentityId;
    type?: 'BOOKING_AVAILABLE';
    agencyId?: Leg_1308_.AgencyId;
    productId?: Product_d23e_.Id;
  } & Record<string, unknown>) & {
    ref: Defined;
    customerId: Defined;
    type: Defined;
    agencyId: Defined;
    productId: Defined;
  },
  ProductOptionAvailableBrand
>;
export type ProductOptionAvailableC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            ref: t.NumberC;
            customerId: typeof Units_c404_.IdentityId;
            type: t.LiteralC<'BOOKING_AVAILABLE'>;
            agencyId: typeof Leg_1308_.AgencyId;
            productId: typeof Product_d23e_.Id;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        ref: typeof Defined;
        customerId: typeof Defined;
        type: typeof Defined;
        agencyId: typeof Defined;
        productId: typeof Defined;
      }>,
    ]
  >,
  ProductOptionAvailableBrand
>;
export const ProductOptionAvailable: ProductOptionAvailableC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        ref: t.number,
        customerId: Units_c404_.IdentityId,
        type: t.literal('BOOKING_AVAILABLE'),
        agencyId: Leg_1308_.AgencyId,
        productId: Product_d23e_.Id,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      ref: Defined,
      customerId: Defined,
      type: Defined,
      agencyId: Defined,
      productId: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      ref?: number;
      customerId?: Units_c404_.IdentityId;
      type?: 'BOOKING_AVAILABLE';
      agencyId?: Leg_1308_.AgencyId;
      productId?: Product_d23e_.Id;
    } & Record<string, unknown>) & {
      ref: Defined;
      customerId: Defined;
      type: Defined;
      agencyId: Defined;
      productId: Defined;
    },
    ProductOptionAvailableBrand
  > => true,
  'ProductOptionAvailable',
);
export type ProductOptionAvailableBrand = {
  readonly ProductOptionAvailable: unique symbol;
};

// ProductOptionOwnAsset
// The customer must provide their own asset to fulfill the leg
export type ProductOptionOwnAsset = t.Branded<
  ({
    ref?: number;
    customerId?: Units_c404_.IdentityId;
    type?: 'BOOKING_OWN_ASSET';
    description?: string;
  } & Record<string, unknown>) & {
    ref: Defined;
    customerId: Defined;
    type: Defined;
    description: Defined;
  },
  ProductOptionOwnAssetBrand
>;
export type ProductOptionOwnAssetC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            ref: t.NumberC;
            customerId: typeof Units_c404_.IdentityId;
            type: t.LiteralC<'BOOKING_OWN_ASSET'>;
            description: t.StringC;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        ref: typeof Defined;
        customerId: typeof Defined;
        type: typeof Defined;
        description: typeof Defined;
      }>,
    ]
  >,
  ProductOptionOwnAssetBrand
>;
export const ProductOptionOwnAsset: ProductOptionOwnAssetC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        ref: t.number,
        customerId: Units_c404_.IdentityId,
        type: t.literal('BOOKING_OWN_ASSET'),
        description: t.string,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      ref: Defined,
      customerId: Defined,
      type: Defined,
      description: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      ref?: number;
      customerId?: Units_c404_.IdentityId;
      type?: 'BOOKING_OWN_ASSET';
      description?: string;
    } & Record<string, unknown>) & {
      ref: Defined;
      customerId: Defined;
      type: Defined;
      description: Defined;
    },
    ProductOptionOwnAssetBrand
  > => true,
  'ProductOptionOwnAsset',
);
export type ProductOptionOwnAssetBrand = {
  readonly ProductOptionOwnAsset: unique symbol;
};

// ProductOptionV2
// The default export. More information at the top.
export type ProductOptionV2 = t.Branded<
  | ProductOptionWithFares
  | ProductOptionWithFaresExistingBooking
  | ProductOptionWithConfigurator
  | ProductOptionWithConfiguratorExistingBooking
  | ProductOptionUnnecessary
  | ProductOptionUnavailable
  | ProductOptionAvailable
  | ProductOptionOwnAsset,
  ProductOptionV2Brand
>;
export type ProductOptionV2C = t.BrandC<
  t.UnionC<
    [
      typeof ProductOptionWithFares,
      typeof ProductOptionWithFaresExistingBooking,
      typeof ProductOptionWithConfigurator,
      typeof ProductOptionWithConfiguratorExistingBooking,
      typeof ProductOptionUnnecessary,
      typeof ProductOptionUnavailable,
      typeof ProductOptionAvailable,
      typeof ProductOptionOwnAsset,
    ]
  >,
  ProductOptionV2Brand
>;
export const ProductOptionV2: ProductOptionV2C = t.brand(
  t.union([
    ProductOptionWithFares,
    ProductOptionWithFaresExistingBooking,
    ProductOptionWithConfigurator,
    ProductOptionWithConfiguratorExistingBooking,
    ProductOptionUnnecessary,
    ProductOptionUnavailable,
    ProductOptionAvailable,
    ProductOptionOwnAsset,
  ]),
  (
    x,
  ): x is t.Branded<
    | ProductOptionWithFares
    | ProductOptionWithFaresExistingBooking
    | ProductOptionWithConfigurator
    | ProductOptionWithConfiguratorExistingBooking
    | ProductOptionUnnecessary
    | ProductOptionUnavailable
    | ProductOptionAvailable
    | ProductOptionOwnAsset,
    ProductOptionV2Brand
  > => true,
  'ProductOptionV2',
);
export type ProductOptionV2Brand = {
  readonly ProductOptionV2: unique symbol;
};

export default ProductOptionV2;

// Success