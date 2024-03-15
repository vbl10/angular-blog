import { Component, OnInit, Input } from '@angular/core';
import { post } from 'src/app/post';
import { posts } from 'src/app/data/data_fake';

@Component({
  selector: 'app-card-over-img',
  templateUrl: './card-over-img.component.html',
  styleUrls: ['./card-over-img.component.css']
})
export class CardOverImgComponent implements OnInit {

  @Input() public postId: number = 2;
  public post: post = new post();

  constructor() { 
  }
  
  ngOnInit(): void {
    this.post = posts[this.postId];
  }
}
