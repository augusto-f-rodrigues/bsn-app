export class Pokemon {
  abilities: Ability[]
  base_experience: number
  forms: Form[]
  game_indices: Index[]
  height: number
  held_items: any[]
  id: number
  is_default: boolean
  location_area_encounters: string
  moves: Mfe[]
  name: string
  order: number
  past_types: any[]
  species: Species
  sprites: Sprites
  stats: Stat[]
  types: Type[]
  weight: number
}

export class Ability {
  ability: Ability2
  is_hidden: boolean
  slot: number
}

export class Ability2 {
  name: string
  url: string
}

export class Form {
  name: string
  url: string
}

export class Index {
  game_index: number
  version: Version
}

export class Version {
  name: string
  url: string
}

export class Mfe {
  move: Move
  version_group_details: VersionGroupDetail[]
}

export class Move {
  name: string
  url: string
}

export class VersionGroupDetail {
  level_learned_at: number
  move_learn_method: MoveLearnMethod
  version_group: VersionGroup
}

export class MoveLearnMethod {
  name: string
  url: string
}

export class VersionGroup {
  name: string
  url: string
}

export class Species {
  name: string
  url: string
}

export class Sprites {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
  other: Other
  versions: Versions
}

export class Other {
  dream_world: DreamWorld
  home: Home
  "official-artwork": OfficialArtwork
}

export class DreamWorld {
  front_default: string
  front_female: any
}

export class Home {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export class OfficialArtwork {
  front_default: string
  front_shiny: string
}

export class Versions {
  "generation-i": GenerationI
  "generation-ii": GenerationIi
  "generation-iii": GenerationIii
  "generation-iv": GenerationIv
  "generation-v": GenerationV
  "generation-vi": GenerationVi
  "generation-vii": GenerationVii
  "generation-viii": GenerationViii
}

export class GenerationI {
  "red-blue": RedBlue
  yellow: Yellow
}

export class RedBlue {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

export class Yellow {
  back_default: string
  back_gray: string
  back_transparent: string
  front_default: string
  front_gray: string
  front_transparent: string
}

export class GenerationIi {
  crystal: Crystal
  gold: Gold
  silver: Silver
}

export class Crystal {
  back_default: string
  back_shiny: string
  back_shiny_transparent: string
  back_transparent: string
  front_default: string
  front_shiny: string
  front_shiny_transparent: string
  front_transparent: string
}

export class Gold {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
}

export class Silver {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
  front_transparent: string
}

export class GenerationIii {
  emerald: Emerald
  "firered-leafgreen": FireredLeafgreen
  "ruby-sapphire": RubySapphire
}

export class Emerald {
  front_default: string
  front_shiny: string
}

export class FireredLeafgreen {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export class RubySapphire {
  back_default: string
  back_shiny: string
  front_default: string
  front_shiny: string
}

export class GenerationIv {
  "diamond-pearl": DiamondPearl
  "heartgold-soulsilver": HeartgoldSoulsilver
  platinum: Platinum
}

export class DiamondPearl {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export class HeartgoldSoulsilver {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export class Platinum {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export class GenerationV {
  "black-white": BlackWhite
}

export class BlackWhite {
  animated: Animated
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export class Animated {
  back_default: string
  back_female: any
  back_shiny: string
  back_shiny_female: any
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export class GenerationVi {
  "omegaruby-alphasapphire": OmegarubyAlphasapphire
  "x-y": XY
}

export class OmegarubyAlphasapphire {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export class XY {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export class GenerationVii {
  icons: Icons
  "ultra-sun-ultra-moon": UltraSunUltraMoon
}

export class Icons {
  front_default: string
  front_female: any
}

export class UltraSunUltraMoon {
  front_default: string
  front_female: any
  front_shiny: string
  front_shiny_female: any
}

export class GenerationViii {
  icons: Icons2
}

export class Icons2 {
  front_default: string
  front_female: any
}

export class Stat {
  base_stat: number
  effort: number
  stat: Stat2
}

export class Stat2 {
  name: string
  url: string
}

export class Type {
  slot: number
  type: Type2
}

export class Type2 {
  name: string
  url: string
}
