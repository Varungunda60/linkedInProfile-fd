import { Component, OnInit } from '@angular/core';
import {PostService} from '../../services/post.service';
import {NotFoundError} from '../validators/not-found-error';
import {BadRequest} from '../validators/bad-request';

@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css']
})
export class PostsComponent implements OnInit {
 posts: any | undefined;
 private url = 'https://jsonplaceholder.typicode.com/posts';
  constructor( private service: PostService ) {
  }
  ngOnInit(): void {
    this.service.setUrl(this.url);
    this.service.get().subscribe(
      response => {this.posts = response;
      },
         error => { this.checkError(error); }
    );
  }
  // tslint:disable-next-line:typedef
  createPost( input: HTMLInputElement | string ){
    const post = {id: input};
    this.posts.push(post);
    this.service.create(post).subscribe((response) => {console.log(response); },
        error => { this.checkError(error); }
    );
  }
  // tslint:disable-next-line:typedef
  updatePost(post: HTMLInputElement | string){
    this.service.update(post).subscribe(response => {console.log(response); },
      error => { this.checkError(error); }
      );
    // this.http.patch(this.url + '/' + 'id',JSON.stringify({key: post})).subscribe(
    //   response =>{
    //     console.log(response);
    //   }
    // );
  }

  // tslint:disable-next-line:typedef
  deletePost(id: number | string ){
  this.service.delete(id).subscribe(response => {
    console.log(response); },
    (error) => {this.checkError(error); }
    );
  }
  // tslint:disable-next-line:typedef
  private checkError(error: any){
    if ( error instanceof NotFoundError){
      alert('404 error occured');
    }
    else if ( error instanceof  BadRequest){
      alert(' bad request error');
    }
    else{
      throw error;
    }
  }

}
