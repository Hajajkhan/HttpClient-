import { Component, OnInit } from '@angular/core';
import { DynamicService } from '../dynamic.service';
import { Todo } from '../dataType';


@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnInit {

  array:Todo[]=[];

  constructor(public service:DynamicService){}

  ngOnInit(): void {
      this.service.getarray().subscribe(data=>{
        this.array = data.slice(0, 50)
        //console.log(this.array);
      })
  }
}