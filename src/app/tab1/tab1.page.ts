import { Component } from '@angular/core';

import { Router } from '@angular/router';
import axios from 'axios';
import { PokemonI } from 'src/interfaces/pokemon';
import { PokemonListResponseI } from 'src/interfaces/pokemonListResponse';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(
    private router: Router
  ) {}

  pokemonInformations: PokemonI[] = [];
  currentPage = 0;
  offset = 0;

  pokemonListResponse: PokemonListResponseI = {
    count: 0,
    next: 'null',
    previous: 'null',
    results: [],
  };

  async ngOnInit() {
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=0&limit=8`
    );
    this.pokemonListResponse = data;
    await this.getNameAndImageUrl();
  }

  async getNameAndImageUrl() {
    const promises = this.pokemonListResponse.results.map(async (el: any) => {
      const { data } = await axios.get(el.url);
      return data;
    });

    this.pokemonInformations = await Promise.all(promises);
  }

  async onOffsetChange(newOffset: any) {
    this.offset = newOffset;
    const { data } = await axios.get(
      `https://pokeapi.co/api/v2/pokemon?offset=${this.offset}&limit=8`
    );
    this.pokemonListResponse = data;
    await this.getNameAndImageUrl();
  }

  onClickShowDetails(id: number) {
    this.router.navigate([`tabs/tab1/${id}`]);
  }
}
