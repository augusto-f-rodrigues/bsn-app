import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private pokemonData = new BehaviorSubject<any>(null);

  setPokemonData(data: any) {
    this.pokemonData.next(data);
  }

  getPokemonData() {
    console.log('entrei')
    return this.pokemonData.getValue();
  }
}