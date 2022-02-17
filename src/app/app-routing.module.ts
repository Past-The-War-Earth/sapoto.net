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
    loadChildren: () => import('./pages/situation-list/situation-list.module').then( m => m.SituationListPageModule)
  },
  {
    path: 'situation',
    loadChildren: () => import('./pages/situation/situation.module').then( m => m.SituationPageModule)
  },
  {
    path: 'reply',
    loadChildren: () => import('./pages/reply/reply.module').then( m => m.ReplyPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
