import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {
  localArray:any=localStorage.getItem('key');
  array:any[]=this.localArray? JSON.parse(this.localArray):[];

  arrayData(data:any){
    this.array = data.slice(0,50);
  }
  todoItemDeletion(data:any){
    this.array.splice(data, 1)
    localStorage.setItem("key", JSON.stringify(this.array));
  }
  
 ngOnInit(): void {

 }
}