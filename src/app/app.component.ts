import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { PostService } from './crud-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title:any;
  body:any;
  value:string="";
  posts:any="";
  data:any;
  selectedIndex:number|null=null;
  index:any;
  showButton=true;
  showupdateButton=false
  constructor(public postService: PostService) { }
    
  ngOnInit(): void {
    this.postService.getAll().subscribe((data: any)=>{
      this.posts = data;
     console.log(this.posts);
    })  
  }
  
  deletePost(id:any, index:number){
    this.postService.deleteTodo(id).subscribe( res => {
    this.posts = this.posts.filter((item: { id: any; }) => item.id !== id);
    console.log('Post deleted successfully!'+id);
    })
  }
  onSubmit(value:any, title:any, body:any){
    this.postService.createTodo(value).subscribe(result=>{
      this.title="";
      this.body="";
      console.log("value", this.title);      
      console.log("body", this.body);      

    });
  }
  editPost(data:any, index:number){
      this.title=data.title;
      this.body=data.body;
       this.selectedIndex=index;
       this.index=index;
       this.showButton=false;
        this.showupdateButton=true;
       console.log('Post edited successfully!');
  }
  updatePosts(post:any){post.id=this.index
    this.postService.updatePost(this.index, post).subscribe();
    this.showButton=true;
    this.showupdateButton=false;
    this.title="";
    this.body="";
  }
}