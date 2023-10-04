import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import axios from 'axios';
import { PokemonListResponseI } from 'src/interfaces/PokemonListResponse.interface';
import { PokemonI } from 'src/interfaces/Pokemon.interface';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private http: HttpClient) {}

  pokemonInformations: PokemonI[] = [];

  pokemonListResponse: PokemonListResponseI = {
    count: 0,
    next: 'https://pokeapi.co/api/v2/pokemon?offset=20&limit=20',
    previous: 'null',
    results: [],
  };

  async ngOnInit() {
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon`);
    this.pokemonListResponse = data;
    await this.getNameAndImageUrl();

    console.log(this.pokemonInformations);
  }

  async getNameAndImageUrl() {
    const promises = await this.pokemonListResponse.results.map(async (el) => {
      const { data } = await axios.get(el.url);
      return data;
    });

    this.pokemonInformations = await Promise.all(promises);
  }
}
