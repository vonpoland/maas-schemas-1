/*

undefined
MaaS customer payment sources update

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_ from '../../../../core/components/api-common';
import * as Units_ from '../../../../core/components/units';
import * as PaymentSource_ from '../paymentSource';

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
  'https://schemas.maas.global/maas-backend/customers/payment-sources/update/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    customerId?: Units_.IdentityId;
    paymentSourceId?: PaymentSource_.PaymentSourceId;
    payload?: ({
      paymentSource?: {
        isDefault?: true;
        alias?: PaymentSource_.Alias;
      } & (
        | {
            isDefault: Defined;
          }
        | {
            alias: Defined;
          }
      );
    } & Record<string, unknown>) & {
      paymentSource: Defined;
    };
    headers?: ApiCommon_.Headers;
  } & {
    identityId: Defined;
    customerId: Defined;
    paymentSourceId: Defined;
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
        paymentSourceId: typeof PaymentSource_.PaymentSourceId;
        payload: t.IntersectionC<
          [
            t.IntersectionC<
              [
                t.PartialC<{
                  paymentSource: t.IntersectionC<
                    [
                      t.PartialC<{
                        isDefault: t.LiteralC<true>;
                        alias: typeof PaymentSource_.Alias;
                      }>,
                      t.UnionC<
                        [
                          t.TypeC<{
                            isDefault: typeof Defined;
                          }>,
                          t.TypeC<{
                            alias: typeof Defined;
                          }>,
                        ]
                      >,
                    ]
                  >;
                }>,
                t.RecordC<t.StringC, t.UnknownC>,
              ]
            >,
            t.TypeC<{
              paymentSource: typeof Defined;
            }>,
          ]
        >;
        headers: typeof ApiCommon_.Headers;
      }>,
      t.TypeC<{
        identityId: typeof Defined;
        customerId: typeof Defined;
        paymentSourceId: typeof Defined;
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
      paymentSourceId: PaymentSource_.PaymentSourceId,
      payload: t.intersection([
        t.intersection([
          t.partial({
            paymentSource: t.intersection([
              t.partial({
                isDefault: t.literal(true),
                alias: PaymentSource_.Alias,
              }),
              t.union([
                t.type({
                  isDefault: Defined,
                }),
                t.type({
                  alias: Defined,
                }),
              ]),
            ]),
          }),
          t.record(t.string, t.unknown),
        ]),
        t.type({
          paymentSource: Defined,
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      identityId: Defined,
      customerId: Defined,
      paymentSourceId: Defined,
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
      paymentSourceId?: PaymentSource_.PaymentSourceId;
      payload?: ({
        paymentSource?: {
          isDefault?: true;
          alias?: PaymentSource_.Alias;
        } & (
          | {
              isDefault: Defined;
            }
          | {
              alias: Defined;
            }
        );
      } & Record<string, unknown>) & {
        paymentSource: Defined;
      };
      headers?: ApiCommon_.Headers;
    } & {
      identityId: Defined;
      customerId: Defined;
      paymentSourceId: Defined;
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
