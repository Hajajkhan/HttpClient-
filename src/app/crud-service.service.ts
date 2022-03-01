import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class PostService {
   
  constructor(private httpClient: HttpClient) { }
     
  getAll(){
    return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/")
  }
     
  createTodo(post:any) {
    console.log(post);
    return this.httpClient.post("https://jsonplaceholder.typicode.com/posts/", JSON.stringify(post))
  }    
  // findTodo(id:number) {
  // return this.httpClient.get("https://jsonplaceholder.typicode.com/posts/" + id)
  // }
     
  updatePost(id:number, data:any) {
  return this.httpClient.put("https://jsonplaceholder.typicode.com/posts/"+ id, JSON.stringify(data))
  }
     
  deleteTodo(id:number){
    return this.httpClient.delete("https://jsonplaceholder.typicode.com/posts/" + id)
  }
}