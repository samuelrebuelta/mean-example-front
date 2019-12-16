import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-input-modal',
  templateUrl: './input-modal.component.html',
  styleUrls: ['./input-modal.component.scss']
})
export class InputModalComponent implements OnInit {

  show = false;
  idToUpdate = null;
  form: FormGroup;
  @Input() entityToUpdate: string;
  @Output() save = new EventEmitter<any>();

  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      fieldValue: new FormControl(null, Validators.required)
    });
  }

  saveForm() {
    if (this.form.get('fieldValue').value && this.form.get('fieldValue').value !== '') {
      this.save.emit({ id: this.idToUpdate, value: this.form.get('fieldValue').value });
      this.form.reset();
    }
  }

}
