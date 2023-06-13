/*

undefined
Request schema for itineraries-create-v2

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as ApiCommon_16a4_ from '../../../core/components/api-common';
import * as Common_ffba_ from '../../../core/components/common';
import * as CustomerSelection_57c3_ from '../../../core/components/customerSelection';
import * as Message_554d_ from '../../../core/components/message';
import * as Itinerary_8303_ from '../../../core/itinerary';
import * as ItineraryV2_5f31_ from '../../../core/itineraryV2';
import * as ProductOptionV2_8170_ from '../../../core/product-optionV2';

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
  'https://schemas.maas.global/maas-backend/itineraries/itinerary-create/request.json';

// OutwardReturnWrapper
// The purpose of this remains a mystery
export type OutwardReturnWrapper = t.Branded<
  {
    itinerary?: Itinerary_8303_.Itinerary | ItineraryV2_5f31_.ItineraryV2;
    customerSelections?: Array<
      {
        ref?: ProductOptionV2_8170_.Ref;
        customerSelection?: CustomerSelection_57c3_.CustomerSelection;
      } & Record<string, unknown>
    >;
  } & Record<string, unknown>,
  OutwardReturnWrapperBrand
>;
export type OutwardReturnWrapperC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        itinerary: t.UnionC<
          [typeof Itinerary_8303_.Itinerary, typeof ItineraryV2_5f31_.ItineraryV2]
        >;
        customerSelections: t.ArrayC<
          t.IntersectionC<
            [
              t.PartialC<{
                ref: typeof ProductOptionV2_8170_.Ref;
                customerSelection: typeof CustomerSelection_57c3_.CustomerSelection;
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
      itinerary: t.union([Itinerary_8303_.Itinerary, ItineraryV2_5f31_.ItineraryV2]),
      customerSelections: t.array(
        t.intersection([
          t.partial({
            ref: ProductOptionV2_8170_.Ref,
            customerSelection: CustomerSelection_57c3_.CustomerSelection,
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
      itinerary?: Itinerary_8303_.Itinerary | ItineraryV2_5f31_.ItineraryV2;
      customerSelections?: Array<
        {
          ref?: ProductOptionV2_8170_.Ref;
          customerSelection?: CustomerSelection_57c3_.CustomerSelection;
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

// Body
// The purpose of this remains a mystery
export type Body = t.Branded<
  {
    paymentSourceId?: Common_ffba_.PaymentSourceId;
    outward?: OutwardReturnWrapper;
    return?: OutwardReturnWrapper;
    message?: Message_554d_.Message;
  } & {
    outward: Defined;
    paymentSourceId: Defined;
  },
  BodyBrand
>;
export type BodyC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        paymentSourceId: typeof Common_ffba_.PaymentSourceId;
        outward: typeof OutwardReturnWrapper;
        return: typeof OutwardReturnWrapper;
        message: typeof Message_554d_.Message;
      }>,
      t.TypeC<{
        outward: typeof Defined;
        paymentSourceId: typeof Defined;
      }>,
    ]
  >,
  BodyBrand
>;
export const Body: BodyC = t.brand(
  t.intersection([
    t.partial({
      paymentSourceId: Common_ffba_.PaymentSourceId,
      outward: OutwardReturnWrapper,
      return: OutwardReturnWrapper,
      message: Message_554d_.Message,
    }),
    t.type({
      outward: Defined,
      paymentSourceId: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      paymentSourceId?: Common_ffba_.PaymentSourceId;
      outward?: OutwardReturnWrapper;
      return?: OutwardReturnWrapper;
      message?: Message_554d_.Message;
    } & {
      outward: Defined;
      paymentSourceId: Defined;
    },
    BodyBrand
  > => true,
  'Body',
);
export type BodyBrand = {
  readonly Body: unique symbol;
};

// Request
// The default export. More information at the top.
export type Request = t.Branded<
  {
    headers?: ApiCommon_16a4_.StandardApiEndpointHeaders;
    requestContext?: ApiCommon_16a4_.ApiGatewayAuthorizedRequestContext;
    body?: Body;
  },
  RequestBrand
>;
export type RequestC = t.BrandC<
  t.PartialC<{
    headers: typeof ApiCommon_16a4_.StandardApiEndpointHeaders;
    requestContext: typeof ApiCommon_16a4_.ApiGatewayAuthorizedRequestContext;
    body: typeof Body;
  }>,
  RequestBrand
>;
export const Request: RequestC = t.brand(
  t.partial({
    headers: ApiCommon_16a4_.StandardApiEndpointHeaders,
    requestContext: ApiCommon_16a4_.ApiGatewayAuthorizedRequestContext,
    body: Body,
  }),
  (
    x,
  ): x is t.Branded<
    {
      headers?: ApiCommon_16a4_.StandardApiEndpointHeaders;
      requestContext?: ApiCommon_16a4_.ApiGatewayAuthorizedRequestContext;
      body?: Body;
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
