/*

undefined
Customer's favorite location

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';
import * as Units_ from './components/units';
import * as UnitsGeo_ from './components/units-geo';
import * as Address_ from './components/address';
import * as Common_ from './components/common';
import * as Station_ from './components/station';

export const schemaId = 'https://schemas.maas.global/core/partialFavoriteLocation.json';

// FavoriteLocationTypes
// The purpose of this remains a mystery
export type FavoriteLocationTypes = t.Branded<
  string & ('ADDRESS' | 'STOP'),
  FavoriteLocationTypesBrand
>;
export type FavoriteLocationTypesC = t.BrandC<
  t.IntersectionC<[t.StringC, t.UnionC<[t.LiteralC<'ADDRESS'>, t.LiteralC<'STOP'>]>]>,
  FavoriteLocationTypesBrand
>;
export const FavoriteLocationTypes: FavoriteLocationTypesC = t.brand(
  t.intersection([t.string, t.union([t.literal('ADDRESS'), t.literal('STOP')])]),
  (x): x is t.Branded<string & ('ADDRESS' | 'STOP'), FavoriteLocationTypesBrand> => true,
  'FavoriteLocationTypes',
);
export interface FavoriteLocationTypesBrand {
  readonly FavoriteLocationTypes: unique symbol;
}

// FavoriteLocationTypesADDRESS
// The purpose of this remains a mystery
export type FavoriteLocationTypesADDRESS = t.Branded<
  FavoriteLocationTypes & 'ADDRESS',
  FavoriteLocationTypesADDRESSBrand
>;
export type FavoriteLocationTypesADDRESSC = t.BrandC<
  t.IntersectionC<[typeof FavoriteLocationTypes, t.LiteralC<'ADDRESS'>]>,
  FavoriteLocationTypesADDRESSBrand
>;
export const FavoriteLocationTypesADDRESS: FavoriteLocationTypesADDRESSC = t.brand(
  t.intersection([FavoriteLocationTypes, t.literal('ADDRESS')]),
  (
    x,
  ): x is t.Branded<
    FavoriteLocationTypes & 'ADDRESS',
    FavoriteLocationTypesADDRESSBrand
  > => true,
  'FavoriteLocationTypesADDRESS',
);
export interface FavoriteLocationTypesADDRESSBrand {
  readonly FavoriteLocationTypesADDRESS: unique symbol;
}
/** require('io-ts-validator').validator(FavoriteLocationTypesADDRESS).decodeSync(defaultFavoriteLocationTypesADDRESS) // => defaultFavoriteLocationTypesADDRESS */
export const defaultFavoriteLocationTypesADDRESS: FavoriteLocationTypesADDRESS = ('ADDRESS' as unknown) as FavoriteLocationTypesADDRESS;

// FavoriteLocationTypesSTOP
// The purpose of this remains a mystery
export type FavoriteLocationTypesSTOP = t.Branded<
  FavoriteLocationTypes & 'STOP',
  FavoriteLocationTypesSTOPBrand
>;
export type FavoriteLocationTypesSTOPC = t.BrandC<
  t.IntersectionC<[typeof FavoriteLocationTypes, t.LiteralC<'STOP'>]>,
  FavoriteLocationTypesSTOPBrand
>;
export const FavoriteLocationTypesSTOP: FavoriteLocationTypesSTOPC = t.brand(
  t.intersection([FavoriteLocationTypes, t.literal('STOP')]),
  (x): x is t.Branded<FavoriteLocationTypes & 'STOP', FavoriteLocationTypesSTOPBrand> =>
    true,
  'FavoriteLocationTypesSTOP',
);
export interface FavoriteLocationTypesSTOPBrand {
  readonly FavoriteLocationTypesSTOP: unique symbol;
}
/** require('io-ts-validator').validator(FavoriteLocationTypesSTOP).decodeSync(defaultFavoriteLocationTypesSTOP) // => defaultFavoriteLocationTypesSTOP */
export const defaultFavoriteLocationTypesSTOP: FavoriteLocationTypesSTOP = ('STOP' as unknown) as FavoriteLocationTypesSTOP;

// PartialFavoriteLocation
// The default export. More information at the top.
export type PartialFavoriteLocation = t.Branded<
  {
    id?: number;
    identityId?: Units_.IdentityId;
    type?: FavoriteLocationTypes;
    name?: string;
    location?: UnitsGeo_.Location;
    streetName?: Address_.PlaceName;
    streetNumber?: string;
    city?: Address_.City;
    country?: Address_.CountryName;
    zipCode?: Address_.ZipCode;
    agencyId?: Common_.AgencyId;
    stopId?: Station_.Id;
    lineId?: string;
  } & Record<string, unknown>,
  PartialFavoriteLocationBrand
>;
export type PartialFavoriteLocationC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        id: t.NumberC;
        identityId: typeof Units_.IdentityId;
        type: typeof FavoriteLocationTypes;
        name: t.StringC;
        location: typeof UnitsGeo_.Location;
        streetName: typeof Address_.PlaceName;
        streetNumber: t.StringC;
        city: typeof Address_.City;
        country: typeof Address_.CountryName;
        zipCode: typeof Address_.ZipCode;
        agencyId: typeof Common_.AgencyId;
        stopId: typeof Station_.Id;
        lineId: t.StringC;
      }>,
      t.RecordC<t.StringC, t.UnknownC>,
    ]
  >,
  PartialFavoriteLocationBrand
>;
export const PartialFavoriteLocation: PartialFavoriteLocationC = t.brand(
  t.intersection([
    t.partial({
      id: t.number,
      identityId: Units_.IdentityId,
      type: FavoriteLocationTypes,
      name: t.string,
      location: UnitsGeo_.Location,
      streetName: Address_.PlaceName,
      streetNumber: t.string,
      city: Address_.City,
      country: Address_.CountryName,
      zipCode: Address_.ZipCode,
      agencyId: Common_.AgencyId,
      stopId: Station_.Id,
      lineId: t.string,
    }),
    t.record(t.string, t.unknown),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      id?: number;
      identityId?: Units_.IdentityId;
      type?: FavoriteLocationTypes;
      name?: string;
      location?: UnitsGeo_.Location;
      streetName?: Address_.PlaceName;
      streetNumber?: string;
      city?: Address_.City;
      country?: Address_.CountryName;
      zipCode?: Address_.ZipCode;
      agencyId?: Common_.AgencyId;
      stopId?: Station_.Id;
      lineId?: string;
    } & Record<string, unknown>,
    PartialFavoriteLocationBrand
  > => true,
  'PartialFavoriteLocation',
);
export interface PartialFavoriteLocationBrand {
  readonly PartialFavoriteLocation: unique symbol;
}

export default PartialFavoriteLocation;

// Success