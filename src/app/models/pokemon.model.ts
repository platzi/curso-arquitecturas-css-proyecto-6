export interface Pokemon {
  id: number | string;
  name: string;
  sprites: {'front_default': string};
  types: Array< {
    type:
      { name: string }
    }
  >;
}
