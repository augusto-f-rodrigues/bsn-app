import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PokemonDetailsComponent } from './pokemon-details.component';
import { IonicModule } from '@ionic/angular';
import { PokemonDetailRoutingModule } from './pokemon-details-routing.module';

@NgModule({
  imports: [
    CommonModule, IonicModule, PokemonDetailRoutingModule
  ],
  declarations: [PokemonDetailsComponent],
})
export class PokemonDetailsModule { }
