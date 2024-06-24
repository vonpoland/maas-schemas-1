/*

undefined
MaaS booking message object

!!! AUTO GENERATED BY IOTSFJS REFRAIN FROM MANUAL EDITING !!!
See https://www.npmjs.com/package/io-ts-from-json-schema

*/

import * as t from 'io-ts';

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

export const schemaId = 'https://schemas.maas.global/core/components/message.json';

// Message
// The default export. More information at the top.
export type Message = t.Branded<
  {
    text?: string;
    mode?: string &
      (
        | 'MODE_WALK'
        | 'MODE_BICYCLE'
        | 'MODE_CAR'
        | 'MODE_TRAM'
        | 'MODE_SUBWAY'
        | 'MODE_RAIL'
        | 'MODE_BUS'
        | 'MODE_FERRY'
        | 'MODE_CABLE_CAR'
        | 'MODE_GONDOLA'
        | 'MODE_FUNICULAR'
        | 'MODE_SHARED_BICYCLE'
        | 'MODE_SHARED_E_BICYCLE'
        | 'MODE_SHARED_CAR'
        | 'MODE_TRANSIT'
        | 'MODE_TRAIN'
        | 'MODE_TRAINISH'
        | 'MODE_BUSISH'
        | 'MODE_TAXI'
        | 'MODE_SCOOTER'
        | 'MODE_MOPED'
      );
    property?: string;
  } & {
    text: Defined;
    mode: Defined;
    property: Defined;
  },
  MessageBrand
>;
export type MessageC = t.BrandC<
  t.IntersectionC<
    [
      t.PartialC<{
        text: t.StringC;
        mode: t.IntersectionC<
          [
            t.StringC,
            t.UnionC<
              [
                t.LiteralC<'MODE_WALK'>,
                t.LiteralC<'MODE_BICYCLE'>,
                t.LiteralC<'MODE_CAR'>,
                t.LiteralC<'MODE_TRAM'>,
                t.LiteralC<'MODE_SUBWAY'>,
                t.LiteralC<'MODE_RAIL'>,
                t.LiteralC<'MODE_BUS'>,
                t.LiteralC<'MODE_FERRY'>,
                t.LiteralC<'MODE_CABLE_CAR'>,
                t.LiteralC<'MODE_GONDOLA'>,
                t.LiteralC<'MODE_FUNICULAR'>,
                t.LiteralC<'MODE_SHARED_BICYCLE'>,
                t.LiteralC<'MODE_SHARED_E_BICYCLE'>,
                t.LiteralC<'MODE_SHARED_CAR'>,
                t.LiteralC<'MODE_TRANSIT'>,
                t.LiteralC<'MODE_TRAIN'>,
                t.LiteralC<'MODE_TRAINISH'>,
                t.LiteralC<'MODE_BUSISH'>,
                t.LiteralC<'MODE_TAXI'>,
                t.LiteralC<'MODE_SCOOTER'>,
                t.LiteralC<'MODE_MOPED'>,
              ]
            >,
          ]
        >;
        property: t.StringC;
      }>,
      t.TypeC<{
        text: typeof Defined;
        mode: typeof Defined;
        property: typeof Defined;
      }>,
    ]
  >,
  MessageBrand
>;
export const Message: MessageC = t.brand(
  t.intersection([
    t.partial({
      text: t.string,
      mode: t.intersection([
        t.string,
        t.union([
          t.literal('MODE_WALK'),
          t.literal('MODE_BICYCLE'),
          t.literal('MODE_CAR'),
          t.literal('MODE_TRAM'),
          t.literal('MODE_SUBWAY'),
          t.literal('MODE_RAIL'),
          t.literal('MODE_BUS'),
          t.literal('MODE_FERRY'),
          t.literal('MODE_CABLE_CAR'),
          t.literal('MODE_GONDOLA'),
          t.literal('MODE_FUNICULAR'),
          t.literal('MODE_SHARED_BICYCLE'),
          t.literal('MODE_SHARED_E_BICYCLE'),
          t.literal('MODE_SHARED_CAR'),
          t.literal('MODE_TRANSIT'),
          t.literal('MODE_TRAIN'),
          t.literal('MODE_TRAINISH'),
          t.literal('MODE_BUSISH'),
          t.literal('MODE_TAXI'),
          t.literal('MODE_SCOOTER'),
          t.literal('MODE_MOPED'),
        ]),
      ]),
      property: t.string,
    }),
    t.type({
      text: Defined,
      mode: Defined,
      property: Defined,
    }),
  ]),
  (
    x,
  ): x is t.Branded<
    {
      text?: string;
      mode?: string &
        (
          | 'MODE_WALK'
          | 'MODE_BICYCLE'
          | 'MODE_CAR'
          | 'MODE_TRAM'
          | 'MODE_SUBWAY'
          | 'MODE_RAIL'
          | 'MODE_BUS'
          | 'MODE_FERRY'
          | 'MODE_CABLE_CAR'
          | 'MODE_GONDOLA'
          | 'MODE_FUNICULAR'
          | 'MODE_SHARED_BICYCLE'
          | 'MODE_SHARED_E_BICYCLE'
          | 'MODE_SHARED_CAR'
          | 'MODE_TRANSIT'
          | 'MODE_TRAIN'
          | 'MODE_TRAINISH'
          | 'MODE_BUSISH'
          | 'MODE_TAXI'
          | 'MODE_SCOOTER'
          | 'MODE_MOPED'
        );
      property?: string;
    } & {
      text: Defined;
      mode: Defined;
      property: Defined;
    },
    MessageBrand
  > => true,
  'Message',
);
export type MessageBrand = {
  readonly Message: unique symbol;
};

export default Message;

// Success
