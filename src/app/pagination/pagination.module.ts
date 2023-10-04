import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PaginationComponent } from './pagination.component';
import { IonicModule } from '@ionic/angular';


@NgModule({
  imports: [CommonModule, IonicModule],
  declarations: [PaginationComponent],
  exports: [PaginationComponent]
})
export class PaginationModule { }
