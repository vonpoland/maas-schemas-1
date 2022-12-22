/*

undefined
Schema for MaaS thing shadow

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as State_ from './components/state';
import * as Units_ from './components/units';
import * as UnitsGeo_ from './components/units-geo';

export const schemaId = 'https://schemas.maas.global/core/iot-thing-shadow.json';

// IotThingShadow
// The default export. More information at the top.
export type IotThingShadow = t.Branded<
  {
    desired?: {} & Record<string, unknown>;
    reported?: {
      location?: {
        lat?: UnitsGeo_.Latitude;
        lon?: UnitsGeo_.Longitude;
        timestamp?: Units_.Time;
        legId?: Units_.Uuid;
      } & Record<string, unknown>;
      leg?: {
        id?: Units_.Uuid;
        timestamp?: Units_.Time;
        state?: State_.LegState;
      } & Record<string, unknown>;
    } & Record<string, unknown>;
  } & Record<string, unknown>,
  IotThingShadowBrand
>;
export type IotThingShadowC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        desired: t.IntersectionC<[t.PartialC<{}>, t.RecordC<t.StringC, t.UnknownC>]>;
        reported: t.IntersectionC<
          [
            t.PartialC<{
              location: t.IntersectionC<
                [
                  t.PartialC<{
                    lat: typeof UnitsGeo_.Latitude;
                    lon: typeof UnitsGeo_.Longitude;
                    timestamp: typeof Units_.Time;
                    legId: typeof Units_.Uuid;
                  }>,
                  t.RecordC<t.StringC, t.UnknownC>,
                ]
              >;
              leg: t.IntersectionC<
                [
                  t.PartialC<{
                    id: typeof Units_.Uuid;
                    timestamp: typeof Units_.Time;
                    state: typeof State_.LegState;
                  }>,
                  t.RecordC<t.StringC, t.UnknownC>,
                ]
              >;
            }>,
            t.RecordC<t.StringC, t.UnknownC>,
          ]
        >;
      }>,
      t.RecordC<t.StringC, t.UnknownC>,
    ]
  >,
  IotThingShadowBrand
>;
export const IotThingShadow: IotThingShadowC = t.brand(
  t.intersection([
    t.partial({
      desired: t.intersection([t.partial({}), t.record(t.string, t.unknown)]),
      reported: t.intersection([
        t.partial({
          location: t.intersection([
            t.partial({
              lat: UnitsGeo_.Latitude,
              lon: UnitsGeo_.Longitude,
              timestamp: Units_.Time,
              legId: Units_.Uuid,
            }),
            t.record(t.string, t.unknown),
          ]),
          leg: t.intersection([
            t.partial({
              id: Units_.Uuid,
              timestamp: Units_.Time,
              state: State_.LegState,
            }),
            t.record(t.string, t.unknown),
          ]),
        }),
        t.record(t.string, t.unknown),
      ]),
    }),
    t.record(t.string, t.unknown),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      desired?: {} & Record<string, unknown>;
      reported?: {
        location?: {
          lat?: UnitsGeo_.Latitude;
          lon?: UnitsGeo_.Longitude;
          timestamp?: Units_.Time;
          legId?: Units_.Uuid;
        } & Record<string, unknown>;
        leg?: {
          id?: Units_.Uuid;
          timestamp?: Units_.Time;
          state?: State_.LegState;
        } & Record<string, unknown>;
      } & Record<string, unknown>;
    } & Record<string, unknown>,
    IotThingShadowBrand
  > => true,
  'IotThingShadow',
);
export type IotThingShadowBrand = {
  readonly IotThingShadow: unique symbol;
};

export default IotThingShadow;

// Success
