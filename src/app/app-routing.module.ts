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
    loadChildren: () => import('./situation-list/situation-list.module').then( m => m.SituationListPageModule)
  },  {
    path: 'post-situation',
    loadChildren: () => import('./post-situation/post-situation.module').then( m => m.PostSituationPageModule)
  },
  {
    path: 'situation',
    loadChildren: () => import('./situation/situation.module').then( m => m.SituationPageModule)
  }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
