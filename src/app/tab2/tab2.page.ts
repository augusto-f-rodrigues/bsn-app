import { Component, OnInit } from '@angular/core';
import { StorageService } from '../services/storage.service';
import { PokemonI } from 'src/interfaces/pokemon.interface';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit {

  pokemonInformations: PokemonI[]
  constructor(private storage: StorageService) {}

  ngOnInit(){}

}
