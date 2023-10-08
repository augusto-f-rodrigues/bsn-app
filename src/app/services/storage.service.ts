import { Injectable } from '@angular/core';

import { Storage } from '@ionic/storage-angular';
import { PokemonI } from 'src/interfaces/pokemon.interface';

@Injectable({
  providedIn: 'root',
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

  public async getAll() {
    const keys = await this.storage.keys();
    const values: any[] = [];
  
    for (const key of keys) {
      const value = await this.storage.get(key);
      values.push(value)
    }
  
    return values;
  }

  public async get(id: string) {
    const pokemon = await this._storage?.get(id);
    return pokemon;
  }

  public remove(id: string) {
    this._storage?.remove(id);
  }

  public async checkIsAlreadyInFavorites(id: string) {
    const pokemonFound = await this.get(id);
    if (pokemonFound) {
      return true;
    } else {
      return false;
    }
  }

  public async toggleFavoriteState(id: string, pokemon: PokemonI) {
    const status = await this.checkIsAlreadyInFavorites(id);
    if (status) {
      this.remove(id);
    } else {
      this.set(id, pokemon);
    }
  }
}
