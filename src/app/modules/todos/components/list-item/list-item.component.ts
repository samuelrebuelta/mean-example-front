import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.scss']
})
export class ListItemComponent implements OnInit {

  newItemValue: string = null;
  @Input() item;
  @Input() newItem = false;

  @Output() postItem = new EventEmitter();
  @Output() updateItem = new EventEmitter();
  @Output() deleteItem = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }

}
