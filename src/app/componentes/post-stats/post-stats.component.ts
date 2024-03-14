import { Component, OnInit, Input } from '@angular/core';
import { post_stats } from 'src/post';
@Component({
  selector: 'app-post-stats',
  templateUrl: './post-stats.component.html',
  styleUrls: ['./post-stats.component.css']
})
export class PostStatsComponent implements OnInit {
  @Input() public stats: post_stats = new post_stats();
  
  constructor() { }

  ngOnInit(): void {
  }

}
