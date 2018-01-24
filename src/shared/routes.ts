import { Route } from '@angular/router/src/config';
import { PokemonFirst20Component } from "../app/pokemon-first-20/pokemon-first-20.component";
import { PokemonSearchComponent } from "../app/pokemon-search/pokemon-search.component";

export const routes: Route[] = [
    {path: 'pokemons', component: PokemonFirst20Component},
    {path: 'pokemon-search', component: PokemonSearchComponent},
    {path: '**', redirectTo: 'pokemons', pathMatch: 'full'}
];