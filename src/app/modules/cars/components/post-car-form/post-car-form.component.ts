import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-post-car-form',
  templateUrl: './post-car-form.component.html',
  styleUrls: ['./post-car-form.component.scss']
})
export class PostCarFormComponent implements OnInit {

  @Output() postCar = new EventEmitter<any>();
  @Input() newCarLoading: number;
  newCarForm: FormGroup;

  constructor(
    private fb: FormBuilder
  ) {
    this.newCarForm = this.fb.group({
      brandName: new FormControl(null, Validators.required),
      modelDescription: new FormControl(''),
    });
  }

  ngOnInit() {
  }

}
