import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TaskdetailsPage } from './taskdetails.page';

const routes: Routes = [
  {
    path: '',
    component: TaskdetailsPage
  },
  {
    path: 'videotask',
    loadChildren: () => import('./videotask/videotask.module').then( m => m.VideotaskPageModule)
  },
  {
    path: 'audiotask',
    loadChildren: () => import('./audiotask/audiotask.module').then( m => m.AudiotaskPageModule)
  },
  {
    path: 'texttask',
    loadChildren: () => import('./texttask/texttask.module').then( m => m.TexttaskPageModule)
  },
  {
    path: 'phototask',
    loadChildren: () => import('./phototask/phototask.module').then( m => m.PhototaskPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TaskdetailsPageRoutingModule {}
