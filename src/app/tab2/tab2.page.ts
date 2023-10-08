import { Component } from '@angular/core';
import { ViewWillEnter } from '@ionic/angular';
import { StorageService } from '../services/storage.service';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
})
export class Tab2Page implements ViewWillEnter  {
  pokemonInformations: any;
  constructor(private storage: StorageService) {}

  async ionViewWillEnter(){
    try {    
      const pokemons = await this.storage.getAll()
      this.pokemonInformations = pokemons
    } catch (error) {
      console.log(error);
    }
  }
}
