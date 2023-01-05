/*

undefined
MaaS bike station schema

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as UnitsGeo_ from './units-geo';

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

export const schemaId = 'https://schemas.maas.global/core/components/bike-station.json';

// BikeStation
// The default export. More information at the top.
export type BikeStation = t.Branded<
  ({
    id?: string;
    name?: string;
    location?: UnitsGeo_.Location;
    slots?: ({
      total?: number;
      empty?: number;
      bikes?: number;
    } & Record<string, unknown>) & {
      total: Defined;
      empty: Defined;
      bikes: Defined;
    };
  } & Record<string, unknown>) & {
    id: Defined;
    name: Defined;
    location: Defined;
  },
  BikeStationBrand
>;
export type BikeStationC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            id: t.StringC;
            name: t.StringC;
            location: typeof UnitsGeo_.Location;
            slots: t.IntersectionC<
              [
                t.IntersectionC<
                  [
                    t.PartialC<{
                      total: t.NumberC;
                      empty: t.NumberC;
                      bikes: t.NumberC;
                    }>,
                    t.RecordC<t.StringC, t.UnknownC>,
                  ]
                >,
                t.TypeC<{
                  total: typeof Defined;
                  empty: typeof Defined;
                  bikes: typeof Defined;
                }>,
              ]
            >;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        id: typeof Defined;
        name: typeof Defined;
        location: typeof Defined;
      }>,
    ]
  >,
  BikeStationBrand
>;
export const BikeStation: BikeStationC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        id: t.string,
        name: t.string,
        location: UnitsGeo_.Location,
        slots: t.intersection([
          t.intersection([
            t.partial({
              total: t.number,
              empty: t.number,
              bikes: t.number,
            }),
            t.record(t.string, t.unknown),
          ]),
          t.type({
            total: Defined,
            empty: Defined,
            bikes: Defined,
          }),
        ]),
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      id: Defined,
      name: Defined,
      location: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      id?: string;
      name?: string;
      location?: UnitsGeo_.Location;
      slots?: ({
        total?: number;
        empty?: number;
        bikes?: number;
      } & Record<string, unknown>) & {
        total: Defined;
        empty: Defined;
        bikes: Defined;
      };
    } & Record<string, unknown>) & {
      id: Defined;
      name: Defined;
      location: Defined;
    },
    BikeStationBrand
  > => true,
  'BikeStation',
);
export interface BikeStationBrand {
  readonly BikeStation: unique symbol;
}

export default BikeStation;

// Success