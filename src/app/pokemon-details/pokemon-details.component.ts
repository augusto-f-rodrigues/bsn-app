import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import axios from 'axios';
import { lastValueFrom } from 'rxjs';
import { PokemonI } from 'src/interfaces/Pokemon.interface';
import { PokemonService } from '../services/pokemon.service';

@Component({
  selector: 'app-pokemon-details',
  templateUrl: './pokemon-details.component.html',
  styleUrls: ['./pokemon-details.component.css'],
})
export class PokemonDetailsComponent implements OnInit {
  constructor(
    private activatedRoute: ActivatedRoute,
    private router: Router,
    private pokemonService: PokemonService
  ) {}

  pokemonInformations: Partial<PokemonI> = {};

  async ngOnInit() {
    const id = this.activatedRoute.snapshot.paramMap.get('id');

    console.log(id)
    const { data } = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    this.pokemonInformations = data;
    console.log(data);
  }

  onClickBackButton() {
    this.router.navigate(['/tabs/tab1']);
  }
}
