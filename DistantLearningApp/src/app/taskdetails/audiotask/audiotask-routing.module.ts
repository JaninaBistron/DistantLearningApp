import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AudiotaskPage } from './audiotask.page';

const routes: Routes = [
  {
    path: '',
    component: AudiotaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AudiotaskPageRoutingModule {}
