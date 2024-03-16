import { Component, OnInit, Input } from '@angular/core';
import { post_meta } from 'src/app/post';

@Component({
  selector: 'app-post-meta',
  templateUrl: './post-meta.component.html',
  styleUrls: ['./post-meta.component.css']
})
export class PostMetaComponent implements OnInit {
  @Input() public meta: post_meta = new post_meta();
  constructor() {
   }

  ngOnInit(): void {
  }

}
