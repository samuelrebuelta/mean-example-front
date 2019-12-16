import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-model-list',
  templateUrl: './model-list.component.html',
  styleUrls: ['./model-list.component.scss', '../car-list/car-list.component.scss']
})
export class ModelListComponent implements OnInit {

  @Input() modelListLoading;
  @Input() selectedBrand: any;
  @Output() deleteModel = new EventEmitter<any>();
  constructor() { }

  ngOnInit() {
  }

}
