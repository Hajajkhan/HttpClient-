import {inject, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './dataType';

@Injectable({
  providedIn: 'root',
})
export class DynamicService {

  constructor(private http: HttpClient) { }

  getarray(){
    return this.http.get<Todo[]>('https://jsonplaceholder.typicode.com/todos');
   };

  getTodoById(id:string){
    return this.http.get<Todo>('https://jsonplaceholder.typicode.com/todos/'+id);
  }
}
