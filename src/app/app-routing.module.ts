import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'situations/Children',
    pathMatch: 'full'
  },
  {
    path: 'situations/:id',
    loadChildren: () => import('./situations/situation-list/situation-list.module').then( m => m.SituationListPageModule)
  },
  {
    path: 'post-situation',
    loadChildren: () => import('./situations/post-situation/post-situation.module').then( m => m.PostSituationPageModule)
  },
  {
    path: 'situation',
    loadChildren: () => import('./situations/situation/situation.module').then( m => m.SituationPageModule)
  },
  {
    path: 'post-reply',
    loadChildren: () => import('./replies/post-reply/post-reply.module').then( m => m.PostReplyPageModule)
  },
  {
    path: 'reply',
    loadChildren: () => import('./replies/reply/reply.module').then( m => m.ReplyPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
