import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { post } from 'src/app/post';
import { posts } from 'src/app/data/data_fake';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  public post: post = posts[1];
  private id: number | null = 0;

  constructor(private route: ActivatedRoute) { 
      
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe((value) => this.id = Number(value.get("id")));
    this.post = posts[this.id != null ? this.id : 0];
    console.log(this.id);
  }

}
