/*

undefined


!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId =
  'https://schemas.maas.global/maas-backend/vehicle/vehicle-alert/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<{} & Record<string, unknown>, ResponseBrand>;
export type ResponseC = t.BrandC<
  t.IntersectionC<[t.PartialC<{}>, t.RecordC<t.StringC, t.UnknownC>]>,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([t.partial({}), t.record(t.string, t.unknown)]),
  (x): x is t.Branded<{} & Record<string, unknown>, ResponseBrand> => true,
  'Response',
);
export type ResponseBrand = {
  readonly Response: unique symbol;
};

export default Response;

// Success
