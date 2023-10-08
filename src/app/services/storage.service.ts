import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { PokemonI } from 'src/interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root'
})
export class StorageService {
  private _storage: Storage | null = null;

  constructor(private storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
    this._storage = storage;
  }

  public set(id: string, pokemon: PokemonI) {
    this._storage?.set(id, pokemon);
  }

  public getAll(){
    this._storage?.keys();
  }

  public remove(id: string){
    this._storage?.remove(id)
  }
}