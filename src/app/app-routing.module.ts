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
    path: 'post-task',
    loadChildren: () => import('./tasks/post-task/post-task.module').then( m => m.PostTaskPageModule)
  },
  {
    path: 'task',
    loadChildren: () => import('./tasks/task/task.module').then( m => m.TaskPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
