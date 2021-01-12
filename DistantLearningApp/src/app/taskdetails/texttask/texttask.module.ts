import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TexttaskPageRoutingModule } from './texttask-routing.module';

import { TexttaskPage } from './texttask.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TexttaskPageRoutingModule
  ],
  declarations: [TexttaskPage]
})
export class TexttaskPageModule {}
