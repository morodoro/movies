import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MoviesViewComponent } from './view/movies-view/movies-view.component';
import { TvSeriesViewComponent } from './view/tv-series-view/tv-series-view.component';
import { PostersGalleryViewComponent } from './view/posters-gallery-view/posters-gallery-view.component';

const routes: Routes = [
  {path: 'movies', component: MoviesViewComponent},
  {path: 'tv-series', component: TvSeriesViewComponent},
  {path: 'posters-gallery', component: PostersGalleryViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
