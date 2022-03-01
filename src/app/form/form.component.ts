import { Component, OnInit } from '@angular/core';
import { PostService } from '../crud-service.service';
import { FormGroup, FormControl, Validators, ReactiveFormsModule, NgForm} from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  form="";
  index:number|null=null;
  value:string="";
  constructor(private service: PostService) { }

  ngOnInit(): void {
  }
}
