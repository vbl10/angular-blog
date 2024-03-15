import { Component, OnInit, Input } from '@angular/core';
import { post } from 'src/app/post';
import { posts } from 'src/app/data/data_fake';
@Component({
  selector: 'app-card-under-img',
  templateUrl: './card-under-img.component.html',
  styleUrls: ['./card-under-img.component.css']
})
export class CardUnderImgComponent implements OnInit {
  @Input() public postId: number = 0;
  public post: post = new post();

  constructor() { 
  }
  
  ngOnInit(): void {
    this.post = posts[this.postId];
  }

}
