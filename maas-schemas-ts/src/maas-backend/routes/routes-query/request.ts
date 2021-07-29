/*

undefined
Request schema for routes query

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from '../../../core/components/units-geo';
import * as Address_ from '../../../core/components/address';
import * as Station_ from '../../../core/components/station';
import * as Units_ from '../../../core/components/units';
import * as SpaceDemand_ from '../../../core/components/spaceDemand';
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
  'http://maasglobal.com/maas-backend/routes/routes-query/request.json';

// Payload
// The purpose of this remains a mystery
export type Payload = t.Branded<
  ({
    from?: UnitsGeo_.ShortLocationString;
    fromName?: Address_.PlaceName;
    fromAddress?: Address_.ComponentAddress;
    fromStationId?: Station_.Id;
    to?: UnitsGeo_.ShortLocationString;
    toName?: Address_.PlaceName;
    toAddress?: Address_.ComponentAddress;
    toStationId?: Station_.Id;
    leaveAt?: Units_.Time;
    arriveBy?: Units_.Time;
    leaveAtReturn?: Units_.Time;
    arriveByReturn?: Units_.Time;
    modes?: string &
      ('PUBLIC_TRANSIT' | 'TAXI' | 'CAR' | 'WALK' | 'BICYCLE' | 'BICYCLE_RENT');
    transitMode?: string & ('TRAIN' | 'BUS' | 'SUBWAY' | 'TRAM' | 'RAIL');
    options?: Record<string, unknown>;
    bookingIdToExtend?: Units_.Uuid;
    spaceDemand?: SpaceDemand_.SpaceDemandString;
  } & Record<
    string,
    | UnitsGeo_.ShortLocationString
    | Address_.PlaceName
    | Address_.ComponentAddress
    | Station_.Id
    | UnitsGeo_.ShortLocationString
    | Address_.PlaceName
    | Address_.ComponentAddress
    | Station_.Id
    | Units_.Time
    | Units_.Time
    | Units_.Time
    | Units_.Time
    | (string & ('PUBLIC_TRANSIT' | 'TAXI' | 'CAR' | 'WALK' | 'BICYCLE' | 'BICYCLE_RENT'))
    | (string & ('TRAIN' | 'BUS' | 'SUBWAY' | 'TRAM' | 'RAIL'))
    | Record<string, unknown>
    | Units_.Uuid
    | SpaceDemand_.SpaceDemandString
    | (string | number | boolean)
  >) & {
    from: Defined;
    to: Defined;
  },
  PayloadBrand
>;
export type PayloadC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            from: typeof UnitsGeo_.ShortLocationString;
            fromName: typeof Address_.PlaceName;
            fromAddress: typeof Address_.ComponentAddress;
            fromStationId: typeof Station_.Id;
            to: typeof UnitsGeo_.ShortLocationString;
            toName: typeof Address_.PlaceName;
            toAddress: typeof Address_.ComponentAddress;
            toStationId: typeof Station_.Id;
            leaveAt: typeof Units_.Time;
            arriveBy: typeof Units_.Time;
            leaveAtReturn: typeof Units_.Time;
            arriveByReturn: typeof Units_.Time;
            modes: t.IntersectionC<
              [
                t.StringC,
                t.UnionC<
                  [
                    t.LiteralC<'PUBLIC_TRANSIT'>,
                    t.LiteralC<'TAXI'>,
                    t.LiteralC<'CAR'>,
                    t.LiteralC<'WALK'>,
                    t.LiteralC<'BICYCLE'>,
                    t.LiteralC<'BICYCLE_RENT'>,
                  ]
                >,
              ]
            >;
            transitMode: t.IntersectionC<
              [
                t.StringC,
                t.UnionC<
                  [
                    t.LiteralC<'TRAIN'>,
                    t.LiteralC<'BUS'>,
                    t.LiteralC<'SUBWAY'>,
                    t.LiteralC<'TRAM'>,
                    t.LiteralC<'RAIL'>,
                  ]
                >,
              ]
            >;
            options: t.UnknownRecordC;
            bookingIdToExtend: typeof Units_.Uuid;
            spaceDemand: typeof SpaceDemand_.SpaceDemandString;
          }>,
          t.RecordC<
            t.StringC,
            t.UnionC<
              [
                typeof UnitsGeo_.ShortLocationString,
                typeof Address_.PlaceName,
                typeof Address_.ComponentAddress,
                typeof Station_.Id,
                typeof UnitsGeo_.ShortLocationString,
                typeof Address_.PlaceName,
                typeof Address_.ComponentAddress,
                typeof Station_.Id,
                typeof Units_.Time,
                typeof Units_.Time,
                typeof Units_.Time,
                typeof Units_.Time,
                t.IntersectionC<
                  [
                    t.StringC,
                    t.UnionC<
                      [
                        t.LiteralC<'PUBLIC_TRANSIT'>,
                        t.LiteralC<'TAXI'>,
                        t.LiteralC<'CAR'>,
                        t.LiteralC<'WALK'>,
                        t.LiteralC<'BICYCLE'>,
                        t.LiteralC<'BICYCLE_RENT'>,
                      ]
                    >,
                  ]
                >,
                t.IntersectionC<
                  [
                    t.StringC,
                    t.UnionC<
                      [
                        t.LiteralC<'TRAIN'>,
                        t.LiteralC<'BUS'>,
                        t.LiteralC<'SUBWAY'>,
                        t.LiteralC<'TRAM'>,
                        t.LiteralC<'RAIL'>,
                      ]
                    >,
                  ]
                >,
                t.UnknownRecordC,
                typeof Units_.Uuid,
                typeof SpaceDemand_.SpaceDemandString,
                t.UnionC<[t.StringC, t.NumberC, t.BooleanC]>,
              ]
            >
          >,
        ]
      >,
      t.TypeC<{
        from: typeof Defined;
        to: typeof Defined;
      }>,
    ]
  >,
  PayloadBrand
>;
export const Payload: PayloadC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        from: UnitsGeo_.ShortLocationString,
        fromName: Address_.PlaceName,
        fromAddress: Address_.ComponentAddress,
        fromStationId: Station_.Id,
        to: UnitsGeo_.ShortLocationString,
        toName: Address_.PlaceName,
        toAddress: Address_.ComponentAddress,
        toStationId: Station_.Id,
        leaveAt: Units_.Time,
        arriveBy: Units_.Time,
        leaveAtReturn: Units_.Time,
        arriveByReturn: Units_.Time,
        modes: t.intersection([
          t.string,
          t.union([
            t.literal('PUBLIC_TRANSIT'),
            t.literal('TAXI'),
            t.literal('CAR'),
            t.literal('WALK'),
            t.literal('BICYCLE'),
            t.literal('BICYCLE_RENT'),
          ]),
        ]),
        transitMode: t.intersection([
          t.string,
          t.union([
            t.literal('TRAIN'),
            t.literal('BUS'),
            t.literal('SUBWAY'),
            t.literal('TRAM'),
            t.literal('RAIL'),
          ]),
        ]),
        options: t.UnknownRecord,
        bookingIdToExtend: Units_.Uuid,
        spaceDemand: SpaceDemand_.SpaceDemandString,
      }),
      t.record(
        t.string,
        t.union([
          UnitsGeo_.ShortLocationString,
          Address_.PlaceName,
          Address_.ComponentAddress,
          Station_.Id,
          UnitsGeo_.ShortLocationString,
          Address_.PlaceName,
          Address_.ComponentAddress,
          Station_.Id,
          Units_.Time,
          Units_.Time,
          Units_.Time,
          Units_.Time,
          t.intersection([
            t.string,
            t.union([
              t.literal('PUBLIC_TRANSIT'),
              t.literal('TAXI'),
              t.literal('CAR'),
              t.literal('WALK'),
              t.literal('BICYCLE'),
              t.literal('BICYCLE_RENT'),
            ]),
          ]),
          t.intersection([
            t.string,
            t.union([
              t.literal('TRAIN'),
              t.literal('BUS'),
              t.literal('SUBWAY'),
              t.literal('TRAM'),
              t.literal('RAIL'),
            ]),
          ]),
          t.UnknownRecord,
          Units_.Uuid,
          SpaceDemand_.SpaceDemandString,
          t.union([t.string, t.number, t.boolean]),
        ]),
      ),
    ]),
    t.type({
      from: Defined,
      to: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      from?: UnitsGeo_.ShortLocationString;
      fromName?: Address_.PlaceName;
      fromAddress?: Address_.ComponentAddress;
      fromStationId?: Station_.Id;
      to?: UnitsGeo_.ShortLocationString;
      toName?: Address_.PlaceName;
      toAddress?: Address_.ComponentAddress;
      toStationId?: Station_.Id;
      leaveAt?: Units_.Time;
      arriveBy?: Units_.Time;
      leaveAtReturn?: Units_.Time;
      arriveByReturn?: Units_.Time;
      modes?: string &
        ('PUBLIC_TRANSIT' | 'TAXI' | 'CAR' | 'WALK' | 'BICYCLE' | 'BICYCLE_RENT');
      transitMode?: string & ('TRAIN' | 'BUS' | 'SUBWAY' | 'TRAM' | 'RAIL');
      options?: Record<string, unknown>;
      bookingIdToExtend?: Units_.Uuid;
      spaceDemand?: SpaceDemand_.SpaceDemandString;
    } & Record<
      string,
      | UnitsGeo_.ShortLocationString
      | Address_.PlaceName
      | Address_.ComponentAddress
      | Station_.Id
      | UnitsGeo_.ShortLocationString
      | Address_.PlaceName
      | Address_.ComponentAddress
      | Station_.Id
      | Units_.Time
      | Units_.Time
      | Units_.Time
      | Units_.Time
      | (string &
          ('PUBLIC_TRANSIT' | 'TAXI' | 'CAR' | 'WALK' | 'BICYCLE' | 'BICYCLE_RENT'))
      | (string & ('TRAIN' | 'BUS' | 'SUBWAY' | 'TRAM' | 'RAIL'))
      | Record<string, unknown>
      | Units_.Uuid
      | SpaceDemand_.SpaceDemandString
      | (string | number | boolean)
    >) & {
      from: Defined;
      to: Defined;
    },
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
    payload?: Payload;
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
    payload: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_.IdentityId;
        payload: typeof Payload;
        headers: typeof ApiCommon_.Headers;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        payload: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      payload: Payload,
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      payload?: Payload;
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
      payload: Defined;
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
