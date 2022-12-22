/*

undefined
Response schema for itinerary-retrieve

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Itinerary_ from '../../../core/itinerary';

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

export const schemaId =
  'https://schemas.maas.global/maas-backend/itineraries/itinerary-retrieve/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  {
    itinerary?: Itinerary_.Itinerary;
    maas?: Record<string, unknown>;
  } & {
    itinerary: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        itinerary: typeof Itinerary_.Itinerary;
        maas: t.RecordC<t.StringC, t.UnknownC>;
      }>,
      t.TypeC<{
        itinerary: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.partial({
      itinerary: Itinerary_.Itinerary,
      maas: t.record(t.string, t.unknown),
    }),
    t.type({
      itinerary: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      itinerary?: Itinerary_.Itinerary;
      maas?: Record<string, unknown>;
    } & {
      itinerary: Defined;
    },
    ResponseBrand
  > => true,
  'Response',
);
export type ResponseBrand = {
  readonly Response: unique symbol;
};

export default Response;

// Success
