
import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import axios from 'axios';
import { PokemonI } from 'src/interfaces/pokemon.interface';
import { Pokemon } from 'src/model/pokemon.model';
import { StorageService } from '../services/storage.service';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit, ViewWillEnter {
  constructor(
    private activatedRoute: ActivatedRoute,
    private storage: StorageService,
    private location: Location
  ) {
    this.pokemonInformations = new Pokemon();
  }

  pokemonInformations: PokemonI;
  pokemonHp: number;
  favorite: boolean

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    this.pokemonInformations = data;
    this.getPokemonHp();
    this.itsAlreadyFavorite()
  }

  getPokemonHp() {
    const hpStat = this.pokemonInformations.stats.find(
      (el: any) => el.stat.name == 'hp'
    );
    this.pokemonHp = hpStat?.base_stat ?? 0;
  }

  onClickBackButton() {
    this.location.back();
  }

  async onClickToFavorite() {
    this.storage.toggleFavoriteState(
      this.pokemonInformations.id.toString(),
      this.pokemonInformations
    );
    this.favorite = !this.favorite
  }

  async ionViewWillEnter() {
    this.itsAlreadyFavorite()
  }

  async itsAlreadyFavorite(){
    const res = await this.storage.checkIsAlreadyInFavorites(this.pokemonInformations?.id?.toString())    
    this.favorite = !res;
  }
 
}
