import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { PokemonCardComponent } from './pokemon-card/pokemon-card.component';
import { PaginationComponent } from './pagination/pagination.component';

@NgModule({
  declarations: [PokemonCardComponent, PaginationComponent],
  imports: [IonicModule, CommonModule],
  exports: [PokemonCardComponent, PaginationComponent],
})
export class SharedModule {}
