import { Component, OnInit } from '@angular/core';
import { post } from 'src/app/post';
import { posts } from 'src/app/data/data_fake'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public posts: readonly post[] = posts;
  constructor() {
  }
  ngOnInit(): void {
  }

}
