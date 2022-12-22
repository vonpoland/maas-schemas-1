/*

undefined
Request schema for tsp-auth verify

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_ from '../../../core/components/api-common';
import * as Common_ from '../../../core/components/common';
import * as Units_ from '../../../core/components/units';
import * as Definitions_ from './definitions';

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
  'https://schemas.maas.global/maas-backend/tsp-auth/verify/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    agencyId?: Common_.AgencyId;
    identityId?: Units_.IdentityId;
    payload?: {
      products?: Definitions_.ProductsNeededVerification;
    } & Record<string, unknown>;
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
    agencyId: Defined;
    payload: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        agencyId: typeof Common_.AgencyId;
        identityId: typeof Units_.IdentityId;
        payload: t.IntersectionC<
          [
            t.PartialC<{
              products: typeof Definitions_.ProductsNeededVerification;
            }>,
            t.RecordC<t.StringC, t.UnknownC>,
          ]
        >;
        headers: typeof ApiCommon_.Headers;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        agencyId: typeof Defined;
        payload: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      agencyId: Common_.AgencyId,
      identityId: Units_.IdentityId,
      payload: t.intersection([
        t.partial({
          products: Definitions_.ProductsNeededVerification,
        }),
        t.record(t.string, t.unknown),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
      agencyId: Defined,
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      agencyId?: Common_.AgencyId;
      identityId?: Units_.IdentityId;
      payload?: {
        products?: Definitions_.ProductsNeededVerification;
      } & Record<string, unknown>;
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
      agencyId: Defined;
      payload: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export type RequestBrand = {
  readonly Request: unique symbol;
};

export default Request;

// Success
