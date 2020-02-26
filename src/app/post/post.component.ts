import { Component, OnInit } from '@angular/core';
import { Post } from "../interfaces/data"; 
import { POSTS } from "../mockData/mockData";

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {

  posts: Post[] = POSTS;

  heart: boolean = false;

  constructor() { }

  ngOnInit() {
  }

  showHeart() {
    this.heart = true;
  }
}
