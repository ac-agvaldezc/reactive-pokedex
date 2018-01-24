import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/observable/throw';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/do';
import { of } from 'rxjs/observable/of';
import { HttpErrorResponse } from '@angular/common/http/src/response';
import { Injectable } from '@angular/core';
import { IPokemonResponse, IPokemon } from './pokemon';
import { EventEmitter } from '@angular/core/src/event_emitter';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class PokemonService {

    private _apiUrl: string = 'http://pokeapi.salestock.net/api/v2/pokemon/';
    public loading: BehaviorSubject<boolean>;

    constructor(private _http: HttpClient) {
        this.loading = new BehaviorSubject<boolean>(false);
    }

    getPokemons(): Observable<IPokemonResponse> {
        return this._http.get<IPokemonResponse>(this._apiUrl)
                    .do(data => {
                        console.log('All: ' + JSON.stringify(data));
                    })
                    .catch(this.handleError);
    }

    searchPokemon(id: number): Observable<IPokemon> {
        return this._http.get<IPokemon>(this._apiUrl + id)
                    .do(data => {
                        console.log('All: ' + JSON.stringify(data));
                    })
                    .catch(this.handleError);
    }

    isLoading(loading: boolean): void {
        this.loading.next(loading);
    }

    private handleError(error:HttpErrorResponse) {
        console.log(error.message);
        return Observable.throw(error);
    } 
}