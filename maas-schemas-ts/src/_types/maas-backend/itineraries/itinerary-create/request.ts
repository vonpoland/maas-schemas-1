/*

undefined
Request schema for itineraries-create

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_ from '../../../core/components/api-common';
import * as Common_ from '../../../core/components/common';
import * as CustomerSelection_ from '../../../core/components/customerSelection';
import * as Message_ from '../../../core/components/message';
import * as Units_ from '../../../core/components/units';
import * as Itinerary_ from '../../../core/itinerary';
import * as ProductOption_ from '../../../core/product-option';

export const schemaId =
  'https://schemas.maas.global/maas-backend/itineraries/itinerary-create/request.json';

// OutwardReturnWrapper
// The purpose of this remains a mystery
export type OutwardReturnWrapper = t.Branded<
  {
    itinerary?: Itinerary_.Itinerary;
    customerSelections?: Array<
      {
        ref?: ProductOption_.Ref;
        customerSelection?: CustomerSelection_.CustomerSelection;
      } & Record<string, unknown>
    >;
  } & Record<string, unknown>,
  OutwardReturnWrapperBrand
>;
export type OutwardReturnWrapperC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        itinerary: typeof Itinerary_.Itinerary;
        customerSelections: t.ArrayC<
          t.IntersectionC<
            [
              t.PartialC<{
                ref: typeof ProductOption_.Ref;
                customerSelection: typeof CustomerSelection_.CustomerSelection;
              }>,
              t.RecordC<t.StringC, t.UnknownC>,
            ]
          >
        >;
      }>,
      t.RecordC<t.StringC, t.UnknownC>,
    ]
  >,
  OutwardReturnWrapperBrand
>;
export const OutwardReturnWrapper: OutwardReturnWrapperC = t.brand(
  t.intersection([
    t.partial({
      itinerary: Itinerary_.Itinerary,
      customerSelections: t.array(
        t.intersection([
          t.partial({
            ref: ProductOption_.Ref,
            customerSelection: CustomerSelection_.CustomerSelection,
          }),
          t.record(t.string, t.unknown),
        ]),
      ),
    }),
    t.record(t.string, t.unknown),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      itinerary?: Itinerary_.Itinerary;
      customerSelections?: Array<
        {
          ref?: ProductOption_.Ref;
          customerSelection?: CustomerSelection_.CustomerSelection;
        } & Record<string, unknown>
      >;
    } & Record<string, unknown>,
    OutwardReturnWrapperBrand
  > => true,
  'OutwardReturnWrapper',
);
export type OutwardReturnWrapperBrand = {
  readonly OutwardReturnWrapper: unique symbol;
};

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    identityId?: Units_.IdentityId;
    headers?: ApiCommon_.Headers;
    payload?: {
      itinerary?: Itinerary_.Itinerary;
      paymentSourceId?: Common_.PaymentSourceId;
      outward?: OutwardReturnWrapper;
      return?: OutwardReturnWrapper;
      message?: Message_.Message;
    };
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.PartialC<{
    identityId: typeof Units_.IdentityId;
    headers: typeof ApiCommon_.Headers;
    payload: t.PartialC<{
      itinerary: typeof Itinerary_.Itinerary;
      paymentSourceId: typeof Common_.PaymentSourceId;
      outward: typeof OutwardReturnWrapper;
      return: typeof OutwardReturnWrapper;
      message: typeof Message_.Message;
    }>;
  }>,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.partial({
    identityId: Units_.IdentityId,
    headers: ApiCommon_.Headers,
    payload: t.partial({
      itinerary: Itinerary_.Itinerary,
      paymentSourceId: Common_.PaymentSourceId,
      outward: OutwardReturnWrapper,
      return: OutwardReturnWrapper,
      message: Message_.Message,
    }),
  }),
  (
    x,
  ): x is t.Branded<
    {
      identityId?: Units_.IdentityId;
      headers?: ApiCommon_.Headers;
      payload?: {
        itinerary?: Itinerary_.Itinerary;
        paymentSourceId?: Common_.PaymentSourceId;
        outward?: OutwardReturnWrapper;
        return?: OutwardReturnWrapper;
        message?: Message_.Message;
      };
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
