import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { AudiotaskPageRoutingModule } from './audiotask-routing.module';

import { AudiotaskPage } from './audiotask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    AudiotaskPageRoutingModule
  ],
  declarations: [AudiotaskPage]
})
export class AudiotaskPageModule {}
