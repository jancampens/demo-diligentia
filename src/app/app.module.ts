import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SceneDetailComponent } from './scene-detail/scene-detail.component';
import { ScenesComponent } from './scenes/scenes.component';

import { MaterialModule } from './material-module';

@NgModule({
  declarations: [
    AppComponent,
    SceneDetailComponent,
    ScenesComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    BrowserModule,
    HttpClientModule,
    MaterialModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
