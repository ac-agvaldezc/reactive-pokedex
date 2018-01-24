import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { PokemonService } from '../shared/get-pokemon.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  
  title = 'app';
  loading: boolean;

  constructor(private _router: Router, private _pokemonService: PokemonService) {}

  searchPokemonComponent(): void {
    this._router.navigateByUrl('pokemon-search');
  }

  getPokemonsComponent(): void {
    this._router.navigateByUrl('/pokemons');
  }

  ngOnInit() {    
    this._pokemonService.loading.subscribe(loading => {
      this.loading = loading;
      console.log('loading: ' + this.loading);
    });
  }
}
