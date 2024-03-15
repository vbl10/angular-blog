import { Component, OnInit } from '@angular/core';
import { post } from 'src/post';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  post_main: post;

  constructor() {
    this.post_main = new post();
    this.post_main.img_src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fimg.bekiaviajes.com%2Farticulos%2Fportada%2F76000%2F76146-h.jpg&f=1&nofb=1&ipt=dbbb9da2edc78b651c7a0e6f3d25e7f5055f4e511b741e9f23868c98e9cd6c82&ipo=images";
    this.post_main.meta.author = "J. R. R. Martin";
    this.post_main.meta.date = "February 22, 2005";
    this.post_main.stats.read_time = "5 min";
    this.post_main.stats.shares = 3000;
    this.post_main.stats.views = 5000;
    this.post_main.title = "Lorem ipsum dolor sit, amet consectetur adipisicing";
    this.post_main.summary = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis, blanditiis! Eum perspiciatis possimus quis alias";
    this.post_main.tags = ["Fantasy"];
  }
  ngOnInit(): void {
  }

}
