/*

undefined
Save user consent to send all TSP required personal documents to TSP

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_ from '../../../../core/components/api-common';
import * as Common_ from '../../../../core/components/common';
import * as Units_ from '../../../../core/components/units';
import * as PersonalDocument_ from '../../../../core/personal-document';

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
  'https://schemas.maas.global/maas-backend/customers/personal-documents/consent/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    customerId?: Units_.IdentityId;
    payload?: ({
      partyId?: PersonalDocument_.PartyId;
      partyType?: PersonalDocument_.PartyType;
      agencyId?: Common_.AgencyId;
    } & Record<string, unknown>) &
      (
        | {
            partyId: Defined;
            partyType: Defined;
          }
        | {
            agencyId: Defined;
          }
      );
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
    payload: Defined;
    headers: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        identityId: typeof Units_.IdentityId;
        customerId: typeof Units_.IdentityId;
        payload: t.IntersectionC<
          [
            t.IntersectionC<
              [
                t.PartialC<{
                  partyId: typeof PersonalDocument_.PartyId;
                  partyType: typeof PersonalDocument_.PartyType;
                  agencyId: typeof Common_.AgencyId;
                }>,
                t.RecordC<t.StringC, t.UnknownC>,
              ]
            >,
            t.UnionC<
              [
                t.TypeC<{
                  partyId: typeof Defined;
                  partyType: typeof Defined;
                }>,
                t.TypeC<{
                  agencyId: typeof Defined;
                }>,
              ]
            >,
          ]
        >;
        headers: typeof ApiCommon_.Headers;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        payload: typeof Defined;
        headers: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      identityId: Units_.IdentityId,
      customerId: Units_.IdentityId,
      payload: t.intersection([
        t.intersection([
          t.partial({
            partyId: PersonalDocument_.PartyId,
            partyType: PersonalDocument_.PartyType,
            agencyId: Common_.AgencyId,
          }),
          t.record(t.string, t.unknown),
        ]),
        t.union([
          t.type({
            partyId: Defined,
            partyType: Defined,
          }),
          t.type({
            agencyId: Defined,
          }),
        ]),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
      payload: Defined,
      headers: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      customerId?: Units_.IdentityId;
      payload?: ({
        partyId?: PersonalDocument_.PartyId;
        partyType?: PersonalDocument_.PartyType;
        agencyId?: Common_.AgencyId;
      } & Record<string, unknown>) &
        (
          | {
              partyId: Defined;
              partyType: Defined;
            }
          | {
              agencyId: Defined;
            }
        );
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
      payload: Defined;
      headers: Defined;
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
