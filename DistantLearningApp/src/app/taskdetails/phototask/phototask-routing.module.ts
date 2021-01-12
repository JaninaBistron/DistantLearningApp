import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PhototaskPage } from './phototask.page';

const routes: Routes = [
  {
    path: '',
    component: PhototaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PhototaskPageRoutingModule {}
