/*

undefined
Revoke user consent to send all document to a TSP

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/personal-documents/revoke-consent/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<{}, ResponseBrand>;
export const Response = t.brand(
  t.partial({}),
  (x): x is t.Branded<{}, ResponseBrand> => true,
  'Response',
);
export interface ResponseBrand {
  readonly Response: unique symbol;
}

export default Response;

// Success
