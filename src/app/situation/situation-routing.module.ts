import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SituationPage } from './situation.page';

const routes: Routes = [
  {
    path: '',
    component: SituationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SituationPageRoutingModule {}
