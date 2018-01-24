import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { PokemonFirst20Component } from './pokemon-first-20/pokemon-first-20.component';
import { PokemonSearchComponent } from './pokemon-search/pokemon-search.component';
import { PokemonService } from '../shared/get-pokemon.service';
import { RouterModule } from '@angular/router';
import { routes } from '../shared/routes';

@NgModule({
  declarations: [
    AppComponent,
    PokemonFirst20Component,
    PokemonSearchComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    RouterModule.forRoot(routes, {useHash: true})
  ],
  providers: [PokemonService],
  bootstrap: [AppComponent]
})
export class AppModule { }
