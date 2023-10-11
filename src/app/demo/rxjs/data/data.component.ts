import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { PokemonService } from '../pokemon.service';
import { Pokemon } from '../types';

@Component({
  selector: 'app-data',
  templateUrl: './data.component.html',
  styleUrls: ['./data.component.scss']
})
export class DataComponent {
  pokemon$: Observable<Pokemon>;
  constructor(private pokemonService: PokemonService) {
    this.pokemon$ = pokemonService.getPokemon(1);
  }
}
