import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-lista-blog',
  templateUrl: './lista-blog.component.html',
  styleUrls: ['./lista-blog.component.css']
})
export class ListaBlogComponent implements OnInit {

  aPosts: Array<Post>;

  constructor() { }

  ngOnInit() {
    this.aPosts = []
  }
onGuardar(ev: Post) {
  this.aPosts.push(ev);
  console.log(this.aPosts)
  
}
}
