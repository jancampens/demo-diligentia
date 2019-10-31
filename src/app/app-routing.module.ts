import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ScenesComponent } from './scenes/scenes.component';
import { SceneDetailComponent } from './scene-detail/scene-detail.component';

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
