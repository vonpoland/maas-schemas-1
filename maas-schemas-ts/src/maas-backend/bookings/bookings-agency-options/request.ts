/*

undefined
Request schema for bookings-agency-options

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as TravelMode_ from '../../../core/components/travel-mode';
import * as Units_ from '../../../core/components/units';
import * as UnitsGeo_ from '../../../core/components/units-geo';
import * as Address_ from '../../../core/components/address';
import * as SpaceDemand_ from '../../../core/components/spaceDemand';
import * as Common_ from '../../../core/components/common';
import * as ApiCommon_ from '../../../core/components/api-common';

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
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId =
  'http://maasglobal.com/maas-backend/bookings/bookings-agency-options/request.json';

// Payload
// The purpose of this remains a mystery
export type Payload = t.Branded<
  {
    mode?: TravelMode_.TravelMode;
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    from?: UnitsGeo_.ShortLocationString;
    to?: UnitsGeo_.ShortLocationString;
    fromName?: Address_.PlaceName;
    fromAddress?: Address_.ComponentAddress;
    fromRadius?: UnitsGeo_.Distance;
    toName?: Address_.PlaceName;
    toAddress?: Address_.ComponentAddress;
    toRadius?: UnitsGeo_.Distance;
    bookingIdToExtend?: Units_.Uuid;
    spaceDemand?: SpaceDemand_.SpaceDemandString;
  } & Record<
    string,
    | TravelMode_.TravelMode
    | Units_.Time
    | Units_.Time
    | UnitsGeo_.ShortLocationString
    | UnitsGeo_.ShortLocationString
    | Address_.PlaceName
    | Address_.ComponentAddress
    | UnitsGeo_.Distance
    | Address_.PlaceName
    | Address_.ComponentAddress
    | UnitsGeo_.Distance
    | Units_.Uuid
    | SpaceDemand_.SpaceDemandString
    | (string | number | boolean)
  >,
  PayloadBrand
>;
export type PayloadC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        mode: typeof TravelMode_.TravelMode;
        startTime: typeof Units_.Time;
        endTime: typeof Units_.Time;
        from: typeof UnitsGeo_.ShortLocationString;
        to: typeof UnitsGeo_.ShortLocationString;
        fromName: typeof Address_.PlaceName;
        fromAddress: typeof Address_.ComponentAddress;
        fromRadius: typeof UnitsGeo_.Distance;
        toName: typeof Address_.PlaceName;
        toAddress: typeof Address_.ComponentAddress;
        toRadius: typeof UnitsGeo_.Distance;
        bookingIdToExtend: typeof Units_.Uuid;
        spaceDemand: typeof SpaceDemand_.SpaceDemandString;
      }>,
      t.RecordC<
        t.StringC,
        t.UnionC<
          [
            typeof TravelMode_.TravelMode,
            typeof Units_.Time,
            typeof Units_.Time,
            typeof UnitsGeo_.ShortLocationString,
            typeof UnitsGeo_.ShortLocationString,
            typeof Address_.PlaceName,
            typeof Address_.ComponentAddress,
            typeof UnitsGeo_.Distance,
            typeof Address_.PlaceName,
            typeof Address_.ComponentAddress,
            typeof UnitsGeo_.Distance,
            typeof Units_.Uuid,
            typeof SpaceDemand_.SpaceDemandString,
            t.UnionC<[t.StringC, t.NumberC, t.BooleanC]>,
          ]
        >
      >,
    ]
  >,
  PayloadBrand
>;
export const Payload: PayloadC = t.brand(
  t.intersection([
    t.partial({
      mode: TravelMode_.TravelMode,
      startTime: Units_.Time,
      endTime: Units_.Time,
      from: UnitsGeo_.ShortLocationString,
      to: UnitsGeo_.ShortLocationString,
      fromName: Address_.PlaceName,
      fromAddress: Address_.ComponentAddress,
      fromRadius: UnitsGeo_.Distance,
      toName: Address_.PlaceName,
      toAddress: Address_.ComponentAddress,
      toRadius: UnitsGeo_.Distance,
      bookingIdToExtend: Units_.Uuid,
      spaceDemand: SpaceDemand_.SpaceDemandString,
    }),
    t.record(
      t.string,
      t.union([
        TravelMode_.TravelMode,
        Units_.Time,
        Units_.Time,
        UnitsGeo_.ShortLocationString,
        UnitsGeo_.ShortLocationString,
        Address_.PlaceName,
        Address_.ComponentAddress,
        UnitsGeo_.Distance,
        Address_.PlaceName,
        Address_.ComponentAddress,
        UnitsGeo_.Distance,
        Units_.Uuid,
        SpaceDemand_.SpaceDemandString,
        t.union([t.string, t.number, t.boolean]),
      ]),
    ),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      mode?: TravelMode_.TravelMode;
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      from?: UnitsGeo_.ShortLocationString;
      to?: UnitsGeo_.ShortLocationString;
      fromName?: Address_.PlaceName;
      fromAddress?: Address_.ComponentAddress;
      fromRadius?: UnitsGeo_.Distance;
      toName?: Address_.PlaceName;
      toAddress?: Address_.ComponentAddress;
      toRadius?: UnitsGeo_.Distance;
      bookingIdToExtend?: Units_.Uuid;
      spaceDemand?: SpaceDemand_.SpaceDemandString;
    } & Record<
      string,
      | TravelMode_.TravelMode
      | Units_.Time
      | Units_.Time
      | UnitsGeo_.ShortLocationString
      | UnitsGeo_.ShortLocationString
      | Address_.PlaceName
      | Address_.ComponentAddress
      | UnitsGeo_.Distance
      | Address_.PlaceName
      | Address_.ComponentAddress
      | UnitsGeo_.Distance
      | Units_.Uuid
      | SpaceDemand_.SpaceDemandString
      | (string | number | boolean)
    >,
    PayloadBrand
  > => true,
  'Payload',
);
export interface PayloadBrand {
  readonly Payload: unique symbol;
}

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    agencyId?: Common_.AgencyId;
    payload?: Payload;
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
    payload: Defined;
    agencyId: Defined;
    headers: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_.IdentityId;
        agencyId: typeof Common_.AgencyId;
        payload: typeof Payload;
        headers: typeof ApiCommon_.Headers;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        payload: typeof Defined;
        agencyId: typeof Defined;
        headers: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      agencyId: Common_.AgencyId,
      payload: Payload,
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
      payload: Defined,
      agencyId: Defined,
      headers: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      agencyId?: Common_.AgencyId;
      payload?: Payload;
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
      payload: Defined;
      agencyId: Defined;
      headers: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success
