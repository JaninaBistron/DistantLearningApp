import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TexttaskPage } from './texttask.page';

const routes: Routes = [
  {
    path: '',
    component: TexttaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TexttaskPageRoutingModule {}
