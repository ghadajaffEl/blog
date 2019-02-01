import { Component, Input, OnInit } from '@angular/core';
import {Post} from '../post';

@Component({
  selector: 'app-post-list-item-component',
  templateUrl: './post-list-item-component.component.html',
  styleUrls: ['./post-list-item-component.component.scss']
})
export class PostListItemComponentComponent implements OnInit {
@Input() post: Post;

  constructor() { }

  ngOnInit() {
  }
  onLove() {
   this.post.loveIts++ ;
  }
  onDislike() {
    this.post.loveIts--;
  }

}
