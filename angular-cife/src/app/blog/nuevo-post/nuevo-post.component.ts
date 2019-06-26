import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { Post } from 'src/app/models/post.model';

@Component({
  selector: 'app-nuevo-post',
  templateUrl: './nuevo-post.component.html',
  styleUrls: ['./nuevo-post.component.css']
})
export class NuevoPostComponent implements OnInit {

  post: Post; //Creo una variable, es un objeto de tipo POst, necesito un post y lo inicializo con un this
  @Output() eventGuardar: EventEmitter<Post>;
  constructor() {
    this.eventGuardar = new EventEmitter();
   }

  ngOnInit() {
    this.post = new Post();//el post va a tener título, contenido y autor


  }
  OnClick() {
    this.eventGuardar.next(this.post);
    this.post = new Post()
  }

}
