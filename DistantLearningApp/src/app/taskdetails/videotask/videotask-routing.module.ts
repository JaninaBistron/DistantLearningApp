import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { VideotaskPage } from './videotask.page';

const routes: Routes = [
  {
    path: '',
    component: VideotaskPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class VideotaskPageRoutingModule {}
