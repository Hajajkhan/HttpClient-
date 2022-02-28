import { Component, OnInit } from '@angular/core';
import { ActivatedRoute,Routes, ParamMap } from '@angular/router';
import { DynamicService } from '../dynamic.service';
import { Todo } from '../dataType';

@Component({
  selector: 'app-tododetail',
  templateUrl: './tododetail.component.html',
  styleUrls: ['./tododetail.component.css']
})
export class TododetailComponent implements OnInit {
  todoId:any="";
  todoItem:Todo | null=null;
  constructor(private activatedRoute: ActivatedRoute, private service: DynamicService) { }

  ngOnInit(): void {
    this.todoId = this.activatedRoute.snapshot.params['id'];
    console.log(this.todoId)

      this.service.getTodoById(this.todoId).subscribe(data =>{
      this.todoItem = data;
      console.log("data", this.todoItem)
    });
  }

}
