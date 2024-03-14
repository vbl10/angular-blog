import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-post-tag',
  templateUrl: './post-tag.component.html',
  styleUrls: ['./post-tag.component.css']
})
export class PostTagComponent implements OnInit {
  @Input() public tags: string[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
