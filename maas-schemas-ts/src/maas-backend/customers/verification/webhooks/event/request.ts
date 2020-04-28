/*

undefined
Request schema for webhook verification event (started and submitted)

!!! AUTO GENERATED BY CONVERT.TS REFRAIN FROM MANUAL EDITING !!!

*/

import * as t from 'io-ts';
import * as Units_ from 'maas-schemas-ts/core/components/units';

type Defined =
  | Record<string, unknown>
  | Array<unknown>
  | string
  | boolean
  | number
  | null;
const Defined = t.union([
  t.UnknownRecord,
  t.UnknownArray,
  t.string,
  t.boolean,
  t.number,
  t.null,
]);

export const schemaId =
  'http://maasglobal.com/maas-backend/customers/verification/webhooks/event/request.json';

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    payload?: {
      id?: Units_.Uuid;
      attemptId?: Units_.Uuid;
      feature?: string;
      code?: number & (7001 | 7002);
      action?: string & ('started' | 'submitted');
    } & {
      id: Defined;
      attemptId: Defined;
      feature: Defined;
      code: Defined;
      action: Defined;
    };
    headers?: {
      'x-signature'?: string;
      'x-auth-client'?: Units_.Uuid;
    } & {
      'x-signature': Defined;
      'x-auth-client': Defined;
    };
    technicalData?: {
      ip?: string;
    };
  } & {
    headers: Defined;
    payload: Defined;
  },
  RequestBrand
>;
export const Request = t.brand(
  t.intersection([
    t.partial({
      payload: t.intersection([
        t.partial({
          id: Units_.Uuid,
          attemptId: Units_.Uuid,
          feature: t.string,
          code: t.intersection([t.number, t.union([t.literal(7001), t.literal(7002)])]),
          action: t.intersection([
            t.string,
            t.union([t.literal('started'), t.literal('submitted')]),
          ]),
        }),
        t.type({
          id: Defined,
          attemptId: Defined,
          feature: Defined,
          code: Defined,
          action: Defined,
        }),
      ]),
      headers: t.intersection([
        t.partial({
          'x-signature': t.string,
          'x-auth-client': Units_.Uuid,
        }),
        t.type({
          'x-signature': Defined,
          'x-auth-client': Defined,
        }),
      ]),
      technicalData: t.partial({
        ip: t.string,
      }),
    }),
    t.type({
      headers: Defined,
      payload: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      payload?: {
        id?: Units_.Uuid;
        attemptId?: Units_.Uuid;
        feature?: string;
        code?: number & (7001 | 7002);
        action?: string & ('started' | 'submitted');
      } & {
        id: Defined;
        attemptId: Defined;
        feature: Defined;
        code: Defined;
        action: Defined;
      };
      headers?: {
        'x-signature'?: string;
        'x-auth-client'?: Units_.Uuid;
      } & {
        'x-signature': Defined;
        'x-auth-client': Defined;
      };
      technicalData?: {
        ip?: string;
      };
    } & {
      headers: Defined;
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
