import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import axios from 'axios';
import { PokemonI } from 'src/interfaces/pokemon.interface';
import { Pokemon } from 'src/model/pokemon.model';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private storage: StorageService
  ) {
    this.pokemonInformations = new Pokemon();
  }

  pokemonInformations: PokemonI;
  pokemonHp: number;

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    this.pokemonInformations = data;
    this.getPokemonHp();
  }

  getPokemonHp() {
    const hpStat = this.pokemonInformations.stats.find(
      (el) => el.stat.name == 'hp'
    );
    console.log(hpStat);
    this.pokemonHp = hpStat?.base_stat ?? 0;
  }

  onClickBackButton() {
    this.router.navigate(['/tabs/tab1']);
  }

  async onClickToFavorite() {
    this.storage.toggleFavoriteState(
      this.pokemonInformations.id.toString(),
      this.pokemonInformations
    );
  }
}
