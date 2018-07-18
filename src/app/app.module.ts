import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesViewComponent } from './view/movies-view/movies-view.component';
import { TvSeriesViewComponent } from './view/tv-series-view/tv-series-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesViewComponent,
    TvSeriesViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
