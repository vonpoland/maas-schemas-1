/*

undefined
Options that can be used for available booking options

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

import * as Address_ from './address';
import * as Common_ from './common';
import * as TravelMode_ from './travel-mode';
import * as Units_ from './units';
import * as UnitsGeo_ from './units-geo';

export const schemaId = 'https://schemas.maas.global/core/components/agencyOptions.json';

// AgencyOptions
// The default export. More information at the top.
export type AgencyOptions = t.Branded<
  {
    mode?: TravelMode_.TravelMode;
    agencyId?: Common_.AgencyId;
    startTime?: Units_.Time;
    endTime?: Units_.Time;
    from?: UnitsGeo_.ShortLocationString;
    to?: UnitsGeo_.ShortLocationString;
    fromName?: Address_.PlaceName;
    fromAddress?: Address_.ComponentAddress;
    fromRadius?: UnitsGeo_.Distance;
    toName?: Address_.PlaceName;
    toAddress?: Address_.ComponentAddress;
    toRadius?: UnitsGeo_.Distance;
  },
  AgencyOptionsBrand
>;
export type AgencyOptionsC = t.BrandC<
  t.PartialC<{
    mode: typeof TravelMode_.TravelMode;
    agencyId: typeof Common_.AgencyId;
    startTime: typeof Units_.Time;
    endTime: typeof Units_.Time;
    from: typeof UnitsGeo_.ShortLocationString;
    to: typeof UnitsGeo_.ShortLocationString;
    fromName: typeof Address_.PlaceName;
    fromAddress: typeof Address_.ComponentAddress;
    fromRadius: typeof UnitsGeo_.Distance;
    toName: typeof Address_.PlaceName;
    toAddress: typeof Address_.ComponentAddress;
    toRadius: typeof UnitsGeo_.Distance;
  }>,
  AgencyOptionsBrand
>;
export const AgencyOptions: AgencyOptionsC = t.brand(
  t.partial({
    mode: TravelMode_.TravelMode,
    agencyId: Common_.AgencyId,
    startTime: Units_.Time,
    endTime: Units_.Time,
    from: UnitsGeo_.ShortLocationString,
    to: UnitsGeo_.ShortLocationString,
    fromName: Address_.PlaceName,
    fromAddress: Address_.ComponentAddress,
    fromRadius: UnitsGeo_.Distance,
    toName: Address_.PlaceName,
    toAddress: Address_.ComponentAddress,
    toRadius: UnitsGeo_.Distance,
  }),
  (
    x,
  ): x is t.Branded<
    {
      mode?: TravelMode_.TravelMode;
      agencyId?: Common_.AgencyId;
      startTime?: Units_.Time;
      endTime?: Units_.Time;
      from?: UnitsGeo_.ShortLocationString;
      to?: UnitsGeo_.ShortLocationString;
      fromName?: Address_.PlaceName;
      fromAddress?: Address_.ComponentAddress;
      fromRadius?: UnitsGeo_.Distance;
      toName?: Address_.PlaceName;
      toAddress?: Address_.ComponentAddress;
      toRadius?: UnitsGeo_.Distance;
    },
    AgencyOptionsBrand
  > => true,
  'AgencyOptions',
);
export type AgencyOptionsBrand = {
  readonly AgencyOptions: unique symbol;
};

export default AgencyOptions;

// Success
