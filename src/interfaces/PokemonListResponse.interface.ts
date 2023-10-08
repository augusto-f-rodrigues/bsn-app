export type PokemonListResponseI = {
  count: number;
  next: string;
  previous: string;
  results: Pokemon[];
}

type Pokemon = {
  name: string;
  url: string;
};
