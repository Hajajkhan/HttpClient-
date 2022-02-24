import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-table-data',
  templateUrl: './table-data.component.html',
  styleUrls: ['./table-data.component.css']
})
export class TableDataComponent implements OnChanges {

  @Input() Array:any;

  @Output() givemeItemforDelete = new EventEmitter;
  public items: any[] = [];

  constructor() { }

  ngOnChanges(changes: any): void {
    if (changes['Array']) {
      this.items = changes['Array'].currentValue;
      console.log({items: this.items})
  }
  }
  deleteTodoItem(index:any){
    this.givemeItemforDelete.emit(index);
  }
}