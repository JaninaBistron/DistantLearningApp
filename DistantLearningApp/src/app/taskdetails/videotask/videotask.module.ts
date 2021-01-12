import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { VideotaskPageRoutingModule } from './videotask-routing.module';

import { VideotaskPage } from './videotask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    VideotaskPageRoutingModule
  ],
  declarations: [VideotaskPage]
})
export class VideotaskPageModule {}
