import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SituationListPage } from './situation-list.page';

const routes: Routes = [
  {
    path: '',
    component: SituationListPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SituationListPageRoutingModule {}
