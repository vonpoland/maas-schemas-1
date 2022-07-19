/*

undefined
A message (push notification) that can be send from TSP to the user

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Booking_ from '../../../core/booking';
import * as ApiCommon_ from '../../../core/components/api-common';

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
export interface DefinedC extends DefinedType {}
export const Defined: DefinedC = new DefinedType();

export const schemaId =
  'https://schemas.maas.global/maas-backend/webhooks/webhooks-message-to-user/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    payload?: ({
      tspId?: Booking_.TspId;
      message?: string;
    } & Record<string, unknown>) & {
      tspId: Defined;
      message: Defined;
    };
    headers?: ApiCommon_.Headers;
  } & {
    payload: Defined;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        payload: t.IntersectionC<
          [
            t.IntersectionC<
              [
                t.PartialC<{
                  tspId: typeof Booking_.TspId;
                  message: t.StringC;
                }>,
                t.RecordC<t.StringC, t.UnknownC>,
              ]
            >,
            t.TypeC<{
              tspId: typeof Defined;
              message: typeof Defined;
            }>,
          ]
        >;
        headers: typeof ApiCommon_.Headers;
      }>,
      t.TypeC<{
        payload: typeof Defined;
      }>,
    ]
  >,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.intersection([
    t.partial({
      payload: t.intersection([
        t.intersection([
          t.partial({
            tspId: Booking_.TspId,
            message: t.string,
          }),
          t.record(t.string, t.unknown),
        ]),
        t.type({
          tspId: Defined,
          message: Defined,
        }),
      ]),
      headers: ApiCommon_.Headers,
    }),
    t.type({
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      payload?: ({
        tspId?: Booking_.TspId;
        message?: string;
      } & Record<string, unknown>) & {
        tspId: Defined;
        message: Defined;
      };
      headers?: ApiCommon_.Headers;
    } & {
      payload: Defined;
    },
    RequestBrand
  > => true,
  'Request',
);
export interface RequestBrand {
  readonly Request: unique symbol;
}

export default Request;

// Success
