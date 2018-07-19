import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MoviesViewComponent } from './view/movies-view/movies-view.component';
import { TvSeriesViewComponent } from './view/tv-series-view/tv-series-view.component';
import { PostersGalleryViewComponent } from './view/posters-gallery-view/posters-gallery-view.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    MoviesViewComponent,
    TvSeriesViewComponent,
    PostersGalleryViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
