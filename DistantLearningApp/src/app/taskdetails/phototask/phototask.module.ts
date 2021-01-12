import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PhototaskPageRoutingModule } from './phototask-routing.module';

import { PhototaskPage } from './phototask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PhototaskPageRoutingModule
  ],
  declarations: [PhototaskPage]
})
export class PhototaskPageModule {}
