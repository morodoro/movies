import { Component, OnInit } from '@angular/core';
import { PostersService } from '../../posters.service';

@Component({
  selector: 'app-posters-gallery-view',
  templateUrl: './posters-gallery-view.component.html',
  styleUrls: ['./posters-gallery-view.component.css']
})
export class PostersGalleryViewComponent implements OnInit {

  constructor(public postersService: PostersService ) { }

  ngOnInit() {
  }

}
