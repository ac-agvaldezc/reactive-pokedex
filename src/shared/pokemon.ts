export interface IPokemonResponse {
    count: number;
    next?: string;
    previous?: string;
    results: IPokemon[];
}

export interface IPokemon {
    name: string;
    url?: string;
    forms?: any[];
    abilities?: any[];
    stats?: any[];
    weight?: number;
    moves?: any[];
    sprites?: IPokemonSprites;
    held_items?: any[];
    location_area_encounters?: string;
    height?: number;
    is_default?: boolean;
    species?: any;
    id?: number;
    order?: number;
    game_indices?: any[];
    base_experience?: number;
    types?: any[];
}

export interface IPokemonSprites {
    back_female?: string;
    back_shiny_female?: string;
    back_default?: string;
    front_female?: string;
    front_shiny_female?: string;
    back_shiny?: string;
    front_default?: string;
    front_shiny?: string;
}