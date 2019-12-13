import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  @Input() carListLoading: number;
  @Input() cars: Array<any>;
  @Output() deleteBrand = new EventEmitter<any>();

  constructor() { }

  ngOnInit() {
  }

}
