import { Component, OnInit } from '@angular/core';
import { DynamicService } from '../dynamic.service';


@Component({
  selector: 'app-title',
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent implements OnInit {
  array:any[]=[];

  constructor(private service: DynamicService) { }

  ngOnInit(): void {
    this.service.getarray().subscribe(data=>{
      this.array=data.slice(0,50);
    })
  }

}
