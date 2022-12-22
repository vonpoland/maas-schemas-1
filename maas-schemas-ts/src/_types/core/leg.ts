/*

undefined
The base leg object with all fields, to be inherited

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as BookingOption_ from './booking-option';
import * as Common_ from './components/common';
import * as Place_ from './components/place';
import * as State_ from './components/state';
import * as TravelMode_ from './components/travel-mode';
import * as Units_ from './components/units';
import * as UnitsGeo_ from './components/units-geo';
import * as Stop_ from './stop';

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

export const schemaId = 'https://schemas.maas.global/core/leg.json';

// State
// The purpose of this remains a mystery
export type State = t.Branded<State_.LegState, StateBrand>;
export type StateC = t.BrandC<typeof State_.LegState, StateBrand>;
export const State: StateC = t.brand(
  State_.LegState,
  (x): x is t.Branded<State_.LegState, StateBrand> => true,
  'State',
);
export type StateBrand = {
  readonly State: unique symbol;
};

// From
// The purpose of this remains a mystery
export type From = t.Branded<Place_.Place, FromBrand>;
export type FromC = t.BrandC<typeof Place_.Place, FromBrand>;
export const From: FromC = t.brand(
  Place_.Place,
  (x): x is t.Branded<Place_.Place, FromBrand> => true,
  'From',
);
export type FromBrand = {
  readonly From: unique symbol;
};

// To
// The purpose of this remains a mystery
export type To = t.Branded<Place_.Place, ToBrand>;
export type ToC = t.BrandC<typeof Place_.Place, ToBrand>;
export const To: ToC = t.brand(
  Place_.Place,
  (x): x is t.Branded<Place_.Place, ToBrand> => true,
  'To',
);
export type ToBrand = {
  readonly To: unique symbol;
};

// StartTime
// The purpose of this remains a mystery
export type StartTime = t.Branded<Units_.Time, StartTimeBrand>;
export type StartTimeC = t.BrandC<typeof Units_.Time, StartTimeBrand>;
export const StartTime: StartTimeC = t.brand(
  Units_.Time,
  (x): x is t.Branded<Units_.Time, StartTimeBrand> => true,
  'StartTime',
);
export type StartTimeBrand = {
  readonly StartTime: unique symbol;
};

// EndTime
// The purpose of this remains a mystery
export type EndTime = t.Branded<Units_.Time, EndTimeBrand>;
export type EndTimeC = t.BrandC<typeof Units_.Time, EndTimeBrand>;
export const EndTime: EndTimeC = t.brand(
  Units_.Time,
  (x): x is t.Branded<Units_.Time, EndTimeBrand> => true,
  'EndTime',
);
export type EndTimeBrand = {
  readonly EndTime: unique symbol;
};

// Mode
// The purpose of this remains a mystery
export type Mode = t.Branded<TravelMode_.TravelMode, ModeBrand>;
export type ModeC = t.BrandC<typeof TravelMode_.TravelMode, ModeBrand>;
export const Mode: ModeC = t.brand(
  TravelMode_.TravelMode,
  (x): x is t.Branded<TravelMode_.TravelMode, ModeBrand> => true,
  'Mode',
);
export type ModeBrand = {
  readonly Mode: unique symbol;
};

// Stops
// The purpose of this remains a mystery
export type Stops = t.Branded<Array<Stop_.Stop>, StopsBrand>;
export type StopsC = t.BrandC<t.ArrayC<typeof Stop_.Stop>, StopsBrand>;
export const Stops: StopsC = t.brand(
  t.array(Stop_.Stop),
  (x): x is t.Branded<Array<Stop_.Stop>, StopsBrand> => true,
  'Stops',
);
export type StopsBrand = {
  readonly Stops: unique symbol;
};

// DepartureDelay
// The purpose of this remains a mystery
export type DepartureDelay = t.Branded<Units_.Duration, DepartureDelayBrand>;
export type DepartureDelayC = t.BrandC<typeof Units_.Duration, DepartureDelayBrand>;
export const DepartureDelay: DepartureDelayC = t.brand(
  Units_.Duration,
  (x): x is t.Branded<Units_.Duration, DepartureDelayBrand> => true,
  'DepartureDelay',
);
export type DepartureDelayBrand = {
  readonly DepartureDelay: unique symbol;
};

// ArrivalDelay
// The purpose of this remains a mystery
export type ArrivalDelay = t.Branded<Units_.Duration, ArrivalDelayBrand>;
export type ArrivalDelayC = t.BrandC<typeof Units_.Duration, ArrivalDelayBrand>;
export const ArrivalDelay: ArrivalDelayC = t.brand(
  Units_.Duration,
  (x): x is t.Branded<Units_.Duration, ArrivalDelayBrand> => true,
  'ArrivalDelay',
);
export type ArrivalDelayBrand = {
  readonly ArrivalDelay: unique symbol;
};

// Distance
// The purpose of this remains a mystery
export type Distance = t.Branded<UnitsGeo_.Distance, DistanceBrand>;
export type DistanceC = t.BrandC<typeof UnitsGeo_.Distance, DistanceBrand>;
export const Distance: DistanceC = t.brand(
  UnitsGeo_.Distance,
  (x): x is t.Branded<UnitsGeo_.Distance, DistanceBrand> => true,
  'Distance',
);
export type DistanceBrand = {
  readonly Distance: unique symbol;
};

// Route
// The purpose of this remains a mystery
export type Route = t.Branded<string, RouteBrand>;
export type RouteC = t.BrandC<t.StringC, RouteBrand>;
export const Route: RouteC = t.brand(
  t.string,
  (x): x is t.Branded<string, RouteBrand> =>
    (typeof x !== 'string' || x.length >= 1) &&
    (typeof x !== 'string' || x.length <= 255),
  'Route',
);
export type RouteBrand = {
  readonly Route: unique symbol;
};

// RouteShortName
// The purpose of this remains a mystery
export type RouteShortName = t.Branded<string, RouteShortNameBrand>;
export type RouteShortNameC = t.BrandC<t.StringC, RouteShortNameBrand>;
export const RouteShortName: RouteShortNameC = t.brand(
  t.string,
  (x): x is t.Branded<string, RouteShortNameBrand> =>
    (typeof x !== 'string' || x.length >= 1) && (typeof x !== 'string' || x.length <= 64),
  'RouteShortName',
);
export type RouteShortNameBrand = {
  readonly RouteShortName: unique symbol;
};

// RouteLongName
// The purpose of this remains a mystery
export type RouteLongName = t.Branded<string, RouteLongNameBrand>;
export type RouteLongNameC = t.BrandC<t.StringC, RouteLongNameBrand>;
export const RouteLongName: RouteLongNameC = t.brand(
  t.string,
  (x): x is t.Branded<string, RouteLongNameBrand> =>
    (typeof x !== 'string' || x.length >= 1) &&
    (typeof x !== 'string' || x.length <= 255),
  'RouteLongName',
);
export type RouteLongNameBrand = {
  readonly RouteLongName: unique symbol;
};

// AgencyId
// The purpose of this remains a mystery
export type AgencyId = t.Branded<Common_.AgencyId, AgencyIdBrand>;
export type AgencyIdC = t.BrandC<typeof Common_.AgencyId, AgencyIdBrand>;
export const AgencyId: AgencyIdC = t.brand(
  Common_.AgencyId,
  (x): x is t.Branded<Common_.AgencyId, AgencyIdBrand> => true,
  'AgencyId',
);
export type AgencyIdBrand = {
  readonly AgencyId: unique symbol;
};

// LegGeometry
// The purpose of this remains a mystery
export type LegGeometry = t.Branded<
  {
    points?: UnitsGeo_.Polyline;
  } & Record<string, unknown>,
  LegGeometryBrand
>;
export type LegGeometryC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        points: typeof UnitsGeo_.Polyline;
      }>,
      t.RecordC<t.StringC, t.UnknownC>,
    ]
  >,
  LegGeometryBrand
>;
export const LegGeometry: LegGeometryC = t.brand(
  t.intersection([
    t.partial({
      points: UnitsGeo_.Polyline,
    }),
    t.record(t.string, t.unknown),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      points?: UnitsGeo_.Polyline;
    } & Record<string, unknown>,
    LegGeometryBrand
  > => true,
  'LegGeometry',
);
export type LegGeometryBrand = {
  readonly LegGeometry: unique symbol;
};

// TspProduct
// The purpose of this remains a mystery
export type TspProduct = t.Branded<BookingOption_.TspProduct, TspProductBrand>;
export type TspProductC = t.BrandC<typeof BookingOption_.TspProduct, TspProductBrand>;
export const TspProduct: TspProductC = t.brand(
  BookingOption_.TspProduct,
  (x): x is t.Branded<BookingOption_.TspProduct, TspProductBrand> => true,
  'TspProduct',
);
export type TspProductBrand = {
  readonly TspProduct: unique symbol;
};

// ProductOption
// Index of the productOption used in the itinerary's productOptions
export type ProductOption = t.Branded<number, ProductOptionBrand>;
export type ProductOptionC = t.BrandC<t.NumberC, ProductOptionBrand>;
export const ProductOption: ProductOptionC = t.brand(
  t.number,
  (x): x is t.Branded<number, ProductOptionBrand> => Number.isInteger(x),
  'ProductOption',
);
export type ProductOptionBrand = {
  readonly ProductOption: unique symbol;
};
/** require('io-ts-validator').validator(ProductOption).decodeSync(minimumProductOption) // => minimumProductOption */
export const minimumProductOption: ProductOption = 0 as unknown as ProductOption;

// LegExtensions
// MaaS specific leg extensions
export type LegExtensions = t.Branded<
  {
    id?: Units_.Uuid;
    signature?: Common_.Signature;
  } & Record<string, unknown>,
  LegExtensionsBrand
>;
export type LegExtensionsC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: typeof Units_.Uuid;
        signature: typeof Common_.Signature;
      }>,
      t.RecordC<t.StringC, t.UnknownC>,
    ]
  >,
  LegExtensionsBrand
>;
export const LegExtensions: LegExtensionsC = t.brand(
  t.intersection([
    t.partial({
      id: Units_.Uuid,
      signature: Common_.Signature,
    }),
    t.record(t.string, t.unknown),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: Units_.Uuid;
      signature?: Common_.Signature;
    } & Record<string, unknown>,
    LegExtensionsBrand
  > => true,
  'LegExtensions',
);
export type LegExtensionsBrand = {
  readonly LegExtensions: unique symbol;
};

// LegCore
// The purpose of this remains a mystery
export type LegCore = t.Branded<
  {
    state?: State;
    from?: From;
    to?: To;
    startTime?: StartTime;
    endTime?: EndTime;
    mode?: Mode;
    stops?: Stops;
    departureDelay?: DepartureDelay;
    arrivalDelay?: ArrivalDelay;
    distance?: Distance;
    route?: Route;
    routeShortName?: RouteShortName;
    routeLongName?: RouteLongName;
    agencyId?: AgencyId;
    legGeometry?: LegGeometry;
    tspProduct?: TspProduct;
    productOption?: ProductOption;
  } & {
    from: Defined;
    to: Defined;
    mode: Defined;
    startTime: Defined;
    endTime: Defined;
    legGeometry: Defined;
  },
  LegCoreBrand
>;
export type LegCoreC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        state: typeof State;
        from: typeof From;
        to: typeof To;
        startTime: typeof StartTime;
        endTime: typeof EndTime;
        mode: typeof Mode;
        stops: typeof Stops;
        departureDelay: typeof DepartureDelay;
        arrivalDelay: typeof ArrivalDelay;
        distance: typeof Distance;
        route: typeof Route;
        routeShortName: typeof RouteShortName;
        routeLongName: typeof RouteLongName;
        agencyId: typeof AgencyId;
        legGeometry: typeof LegGeometry;
        tspProduct: typeof TspProduct;
        productOption: typeof ProductOption;
      }>,
      t.TypeC<{
        from: typeof Defined;
        to: typeof Defined;
        mode: typeof Defined;
        startTime: typeof Defined;
        endTime: typeof Defined;
        legGeometry: typeof Defined;
      }>,
    ]
  >,
  LegCoreBrand
>;
export const LegCore: LegCoreC = t.brand(
  t.intersection([
    t.partial({
      state: State,
      from: From,
      to: To,
      startTime: StartTime,
      endTime: EndTime,
      mode: Mode,
      stops: Stops,
      departureDelay: DepartureDelay,
      arrivalDelay: ArrivalDelay,
      distance: Distance,
      route: Route,
      routeShortName: RouteShortName,
      routeLongName: RouteLongName,
      agencyId: AgencyId,
      legGeometry: LegGeometry,
      tspProduct: TspProduct,
      productOption: ProductOption,
    }),
    t.type({
      from: Defined,
      to: Defined,
      mode: Defined,
      startTime: Defined,
      endTime: Defined,
      legGeometry: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      state?: State;
      from?: From;
      to?: To;
      startTime?: StartTime;
      endTime?: EndTime;
      mode?: Mode;
      stops?: Stops;
      departureDelay?: DepartureDelay;
      arrivalDelay?: ArrivalDelay;
      distance?: Distance;
      route?: Route;
      routeShortName?: RouteShortName;
      routeLongName?: RouteLongName;
      agencyId?: AgencyId;
      legGeometry?: LegGeometry;
      tspProduct?: TspProduct;
      productOption?: ProductOption;
    } & {
      from: Defined;
      to: Defined;
      mode: Defined;
      startTime: Defined;
      endTime: Defined;
      legGeometry: Defined;
    },
    LegCoreBrand
  > => true,
  'LegCore',
);
export type LegCoreBrand = {
  readonly LegCore: unique symbol;
};

// WaitingLeg
// The purpose of this remains a mystery
export type WaitingLeg = t.Branded<
  ({
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    mode?: TravelMode_.WaitingMode;
  } & Record<string, unknown>) & {
    mode: Defined;
    startTime: Defined;
    endTime: Defined;
  },
  WaitingLegBrand
>;
export type WaitingLegC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            startTime: typeof Units_.Time;
            endTime: typeof Units_.Time;
            mode: typeof TravelMode_.WaitingMode;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        mode: typeof Defined;
        startTime: typeof Defined;
        endTime: typeof Defined;
      }>,
    ]
  >,
  WaitingLegBrand
>;
export const WaitingLeg: WaitingLegC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        startTime: Units_.Time,
        endTime: Units_.Time,
        mode: TravelMode_.WaitingMode,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      mode: Defined,
      startTime: Defined,
      endTime: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      mode?: TravelMode_.WaitingMode;
    } & Record<string, unknown>) & {
      mode: Defined;
      startTime: Defined;
      endTime: Defined;
    },
    WaitingLegBrand
  > => true,
  'WaitingLeg',
);
export type WaitingLegBrand = {
  readonly WaitingLeg: unique symbol;
};

// TransferLeg
// The purpose of this remains a mystery
export type TransferLeg = t.Branded<
  ({
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    mode?: TravelMode_.TransferMode;
  } & Record<string, unknown>) & {
    mode: Defined;
    startTime: Defined;
    endTime: Defined;
  },
  TransferLegBrand
>;
export type TransferLegC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            startTime: typeof Units_.Time;
            endTime: typeof Units_.Time;
            mode: typeof TravelMode_.TransferMode;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        mode: typeof Defined;
        startTime: typeof Defined;
        endTime: typeof Defined;
      }>,
    ]
  >,
  TransferLegBrand
>;
export const TransferLeg: TransferLegC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        startTime: Units_.Time,
        endTime: Units_.Time,
        mode: TravelMode_.TransferMode,
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      mode: Defined,
      startTime: Defined,
      endTime: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      mode?: TravelMode_.TransferMode;
    } & Record<string, unknown>) & {
      mode: Defined;
      startTime: Defined;
      endTime: Defined;
    },
    TransferLegBrand
  > => true,
  'TransferLeg',
);
export type TransferLegBrand = {
  readonly TransferLeg: unique symbol;
};

// Leg
// The default export. More information at the top.
export type Leg = t.Branded<
  Record<string, unknown> &
    Record<string, unknown> &
    (LegExtensions & (LegCore | WaitingLeg | TransferLeg)),
  LegBrand
>;
export type LegC = t.BrandC<
  t.IntersectionC<
    [
      t.UnknownRecordC,
      t.RecordC<t.StringC, t.UnknownC>,
      t.IntersectionC<
        [
          typeof LegExtensions,
          t.UnionC<[typeof LegCore, typeof WaitingLeg, typeof TransferLeg]>,
        ]
      >,
    ]
  >,
  LegBrand
>;
export const Leg: LegC = t.brand(
  t.intersection([
    t.UnknownRecord,
    t.record(t.string, t.unknown),
    t.intersection([LegExtensions, t.union([LegCore, WaitingLeg, TransferLeg])]),
  ]),
  (
    x,
  ): x is t.Branded<
    Record<string, unknown> &
      Record<string, unknown> &
      (LegExtensions & (LegCore | WaitingLeg | TransferLeg)),
    LegBrand
  > => true,
  'Leg',
);
export type LegBrand = {
  readonly Leg: unique symbol;
};

export default Leg;

// Success
