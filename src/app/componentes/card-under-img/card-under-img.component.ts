import { Component, OnInit, Input } from '@angular/core';
import { post } from 'src/post';
@Component({
  selector: 'app-card-under-img',
  templateUrl: './card-under-img.component.html',
  styleUrls: ['./card-under-img.component.css']
})
export class CardUnderImgComponent implements OnInit {
  @Input() public post: post = new post();

  constructor() { }

  ngOnInit(): void {
  }

}
