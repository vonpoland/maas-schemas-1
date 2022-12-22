/*

undefined
KycService object

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as PersonalDocument_ from './personal-document';

export const schemaId = 'https://schemas.maas.global/core/kyc-service.json';

// KycService
// The default export. More information at the top.
export type KycService = t.Branded<
  {
    id?: string;
    supportedDocumentTypes?: Array<PersonalDocument_.DocumentType>;
    supportedDocumentCategories?: Record<string, unknown> & Record<string, unknown>;
  } & Record<string, unknown>,
  KycServiceBrand
>;
export type KycServiceC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: t.StringC;
        supportedDocumentTypes: t.ArrayC<typeof PersonalDocument_.DocumentType>;
        supportedDocumentCategories: t.IntersectionC<
          [t.UnknownRecordC, t.RecordC<t.StringC, t.UnknownC>]
        >;
      }>,
      t.RecordC<t.StringC, t.UnknownC>,
    ]
  >,
  KycServiceBrand
>;
export const KycService: KycServiceC = t.brand(
  t.intersection([
    t.partial({
      id: t.string,
      supportedDocumentTypes: t.array(PersonalDocument_.DocumentType),
      supportedDocumentCategories: t.intersection([
        t.UnknownRecord,
        t.record(t.string, t.unknown),
      ]),
    }),
    t.record(t.string, t.unknown),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: string;
      supportedDocumentTypes?: Array<PersonalDocument_.DocumentType>;
      supportedDocumentCategories?: Record<string, unknown> & Record<string, unknown>;
    } & Record<string, unknown>,
    KycServiceBrand
  > => true,
  'KycService',
);
export type KycServiceBrand = {
  readonly KycService: unique symbol;
};

export default KycService;

// Success
