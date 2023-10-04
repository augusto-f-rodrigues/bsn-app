import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Tab1Page } from './tab1.page';
import { ExploreContainerComponentModule } from '../explore-container/explore-container.module';

import { Tab1PageRoutingModule } from './tab1-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { PaginationModule } from '../pagination/pagination.module';

@NgModule({
  imports: [
    IonicModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ExploreContainerComponentModule,
    PaginationModule,
    Tab1PageRoutingModule
  ],
  declarations: [Tab1Page]
})
export class Tab1PageModule {}
