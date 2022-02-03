import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostSituationPage } from './post-situation.page';

const routes: Routes = [
  {
    path: '',
    component: PostSituationPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostSituationPageRoutingModule {}
