/*

undefined
MaaS personal data permissions specification

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

export const schemaId =
  'https://schemas.maas.global/core/components/personalDataAllowItem.json';

// PersonalDataAllowItem
// The default export. More information at the top.
export type PersonalDataAllowItem = t.Branded<
  {
    type?: 'allOf' | 'anyOf';
    items?: Array<string>;
  } & Record<string, unknown>,
  PersonalDataAllowItemBrand
>;
export type PersonalDataAllowItemC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        type: t.UnionC<[t.LiteralC<'allOf'>, t.LiteralC<'anyOf'>]>;
        items: t.ArrayC<t.StringC>;
      }>,
      t.RecordC<t.StringC, t.UnknownC>,
    ]
  >,
  PersonalDataAllowItemBrand
>;
export const PersonalDataAllowItem: PersonalDataAllowItemC = t.brand(
  t.intersection([
    t.partial({
      type: t.union([t.literal('allOf'), t.literal('anyOf')]),
      items: t.array(t.string),
    }),
    t.record(t.string, t.unknown),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      type?: 'allOf' | 'anyOf';
      items?: Array<string>;
    } & Record<string, unknown>,
    PersonalDataAllowItemBrand
  > => true,
  'PersonalDataAllowItem',
);
export interface PersonalDataAllowItemBrand {
  readonly PersonalDataAllowItem: unique symbol;
}

export default PersonalDataAllowItem;

// Success
