/*

undefined
MaaS customer virtual cards import transactions response

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as VirtualCardAccountPosting_ from '../virtualCardAccountPosting';

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
  'https://schemas.maas.global/maas-backend/customers/virtual-cards/import-transactions/response.json';

// Response
// The default export. More information at the top.
export type Response = t.Branded<
  ({
    transactions?: Array<VirtualCardAccountPosting_.VirtualCardAccountPosting>;
  } & Record<string, unknown>) & {
    transactions: Defined;
  },
  ResponseBrand
>;
export type ResponseC = t.BrandC<
  t.IntersectionC<
    [
      t.IntersectionC<
        [
          t.PartialC<{
            transactions: t.ArrayC<
              typeof VirtualCardAccountPosting_.VirtualCardAccountPosting
            >;
          }>,
          t.RecordC<t.StringC, t.UnknownC>,
        ]
      >,
      t.TypeC<{
        transactions: typeof Defined;
      }>,
    ]
  >,
  ResponseBrand
>;
export const Response: ResponseC = t.brand(
  t.intersection([
    t.intersection([
      t.partial({
        transactions: t.array(VirtualCardAccountPosting_.VirtualCardAccountPosting),
      }),
      t.record(t.string, t.unknown),
    ]),
    t.type({
      transactions: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    ({
      transactions?: Array<VirtualCardAccountPosting_.VirtualCardAccountPosting>;
    } & Record<string, unknown>) & {
      transactions: Defined;
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
