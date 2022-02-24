import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class FetchingService {

  constructor(private httpClient: HttpClient) { }

  getarray(){
   return this.httpClient.get<any>('https://jsonplaceholder.typicode.com/todos')
  }
}