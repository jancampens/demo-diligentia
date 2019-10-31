import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ScenesComponent } from './scenes/scenes.component';
import { SceneDetailComponent } from './scene-detail/scene-detail.component';

@NgModule({
  declarations: [
    AppComponent,
    ScenesComponent,
    SceneDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
