import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'about',
    pathMatch: 'full'
  },
  {
    path: 'situation-list/topic/:topicRepositoryId/:topicActorId/:topicActorRecordId',
    loadChildren: () => import('./pages/situation-list/situation-list.module').then(m => m.SituationListPageModule)
  },
  {
    path: 'situation/:situationThreadRepositoryId/:situationThreadActorId/:situationThreadActorRecordId',
    loadChildren: () => import('./pages/situation/situation.module').then(m => m.SituationPageModule)
  },
  {
    path: 'reply',
    loadChildren: () => import('./pages/reply/reply.module').then(m => m.ReplyPageModule)
  },
  {
    path: 'topics',
    loadChildren: () => import('./pages/topics/topics.module').then(m => m.TopicsPageModule)
  },
  {
    path: 'about',
    loadChildren: () => import('./pages/about/about.module').then( m => m.AboutPageModule)
  }



];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules, useHash: true })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
