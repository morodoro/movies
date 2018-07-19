import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Posters } from './posters';

@Injectable({
  providedIn: 'root'
})
export class PostersService {
  currentIndex = 0;
  posters: Posters[] = [];

  constructor(httpClient: HttpClient) {
    httpClient.get<Posters[]>('assets/movie-posters.json')
      .subscribe((response) => {
        this.posters = response;
      });
   }

   getCurrentPoster(): Posters {
    if (this.posters) {
      return this.posters[this.currentIndex];
    } else {
      console.log('Nie ma plakatów');
      return null;
    }
  }
}
