import { Component, OnInit, OnDestroy, Output, EventEmitter } from '@angular/core';
import { PokemonService } from '../../shared/get-pokemon.service';
import { IPokemon } from '../../shared/pokemon';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-pokemon-search',
  templateUrl: './pokemon-search.component.html',
  styleUrls: ['./pokemon-search.component.css']
})
export class PokemonSearchComponent implements OnInit {

  errorMessage: string;
  _pokemonId: number;
  searchedPokemon: IPokemon;
  searchedPokemonImage: string;
  searchPokemonSubscription: Subscription;

  public get pokemonId() : number {
    return this._pokemonId;
  }
  
  public set pokemonId(value : number) {
    this._pokemonId = value;
  }

  constructor(private _pokemonService: PokemonService) {}

  ngOnInit() {
  }

  ngOnDestroy() {
    console.log('destroyed pokemon search component');
  }

  searchPokemon(): void {
    if (this._pokemonId) {
      console.log('Searching for pokemon with id: ' + this._pokemonId)
      this._pokemonService.isLoading(true)
      this.searchPokemonSubscription = this._pokemonService.searchPokemon(this._pokemonId)
        .subscribe(pokemon => {
          this.searchedPokemon = pokemon;
          this.searchedPokemonImage = this.searchedPokemon.sprites.front_default;
        },
        error => this.errorMessage = <any>error,
        () => {
          this._pokemonService.loading.next(false);
          this.searchPokemonSubscription.unsubscribe()
        }
      );
    } else {
      this.errorMessage = 'Se necesita un # de pokemon para buscar;'
    }
  }
}
