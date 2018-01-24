import { Component, OnInit, OnDestroy } from '@angular/core';
import { PokemonService } from '../../shared/get-pokemon.service';
import { IPokemon } from '../../shared/pokemon';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-pokemon-first-20',
  templateUrl: './pokemon-first-20.component.html',
  styleUrls: ['./pokemon-first-20.component.css'],
})
export class PokemonFirst20Component implements OnInit {

  pokemons: IPokemon[];
  errorMessage: string;
  getPokemonSubscription: Subscription;

  constructor(private _pokemonService: PokemonService) {}

  getPokemons(): void {
    console.log('Get pokemons');
    this._pokemonService.isLoading(true);
    this.getPokemonSubscription = this._pokemonService.getPokemons()
        .subscribe(pokemonResponse => {
          this.pokemons = pokemonResponse.results;
        },
        error => this.errorMessage = <any>error,
        () => {
          this._pokemonService.isLoading(false);
          this.getPokemonSubscription.unsubscribe();
        }
      );
  }

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('destroyed pokemons component');
  }
}
