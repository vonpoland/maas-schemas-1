/*

undefined
Schema for MODE_BUS meta field

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';

export const schemaId = 'http://maasglobal.com/core/modes/MODE_BUS.json';

// MODE_BUS
// The default export. More information at the top.
export type MODE_BUS = t.Branded<{}, MODE_BUSBrand>;
export const MODE_BUS = t.brand(
  t.type({}),
  (x): x is t.Branded<{}, MODE_BUSBrand> => true,
  'MODE_BUS',
);
export interface MODE_BUSBrand {
  readonly MODE_BUS: unique symbol;
}

export default MODE_BUS;

// Success