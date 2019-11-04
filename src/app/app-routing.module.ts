import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SceneDetailComponent } from './scene-detail/scene-detail.component';
import { ScenesComponent } from './scenes/scenes.component';

const routes: Routes = [
  { path: '', redirectTo: 'overview', pathMatch: 'full'},
  { path: 'overview', component: ScenesComponent},
  { path: 'detail/:id', component: SceneDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
