import { Component, OnInit,Output, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FetchingService } from '../fetching.service';
@Component({
  selector: 'app-data-fetching',
  templateUrl: './data-fetching.component.html',
  styleUrls: ['./data-fetching.component.css']
})
export class DataFetchingComponent implements OnInit {

  @Output() fetchedArray= new EventEmitter; 

  array:any[]=[];

  constructor(private service: FetchingService) { }

  ngOnInit(){
    this.service.getarray().subscribe(data=>{
      this.array = data;
      this.fetchedArray.emit(this.array);
    })
  }
}