import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import axios from 'axios';
import { PokemonListResponseI } from 'src/interfaces/PokemonListResponse.interface';
import { PokemonI } from 'src/interfaces/Pokemon.interface';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
})
export class Tab1Page {
  constructor(private http: HttpClient, private router: Router) {}

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

    console.log(this.pokemonInformations);
  }

  async getNameAndImageUrl() {
    const promises = this.pokemonListResponse.results.map(async (el) => {
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
    console.log(this.offset);
  }

  onClickShowDetails(id: number) {
    console.log(id)
    this.router.navigate([`tabs/tab1/${id}`]);
  }
}
