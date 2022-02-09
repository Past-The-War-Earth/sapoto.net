import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PostReplyPage } from './post-reply.page';

const routes: Routes = [
  {
    path: '',
    component: PostReplyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PostReplyPageRoutingModule {}
