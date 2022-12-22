/*

undefined
Request schema for profile-webhook

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId =
  'https://schemas.maas.global/maas-backend/profile/profile-webhook/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<unknown, RequestBrand>;
export type RequestC = t.BrandC<t.UnknownC, RequestBrand>;
export const Request: RequestC = t.brand(
  t.unknown,
  (x): x is t.Branded<unknown, RequestBrand> => true,
  'Request',
);
export type RequestBrand = {
  readonly Request: unique symbol;
};

export default Request;

// Success
