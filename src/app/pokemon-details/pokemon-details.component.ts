
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ViewWillEnter } from '@ionic/angular';
import axios from 'axios';
import { PokemonI } from 'src/interfaces/pokemon';
import { Pokemon } from 'src/model/pokemon.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit, ViewWillEnter {
  constructor(
    private activatedRoute: ActivatedRoute,
    private storage: StorageService,
    private router: Router
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
    this.router.navigate(['/tabs/home']);
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
