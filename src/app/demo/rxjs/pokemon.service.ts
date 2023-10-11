import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Ability, Pokemon } from './types';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private baseUrl = "https://pokeapi.co/api/v2/";
  constructor(private httpClient: HttpClient) { }

  getPokemon(id: number): Observable<Pokemon> {
    return this.httpClient.get<Pokemon>(this.baseUrl + `pokemon/${id}`);
  }

  getAbilities(name: string): Observable<Ability> {
    return this.httpClient.get<Ability>(this.baseUrl + `ability/${name}`);
  }
}
