import { Component, OnInit, Input } from '@angular/core';
import { post } from 'src/post';
@Component({
  selector: 'app-card-over-img',
  templateUrl: './card-over-img.component.html',
  styleUrls: ['./card-over-img.component.css']
})
export class CardOverImgComponent implements OnInit {

  @Input() public post: post = new post();

  constructor() { }

  ngOnInit(): void {
  }

}
