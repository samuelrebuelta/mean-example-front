import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';

interface IResponse {
  message: string;
  data: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mean-example-front';
  cars: Array<any>;
  newCarForm: FormGroup;
  isLoading = false;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.newCarForm = this.fb.group({
      brand: new FormControl(null, Validators.required),
      model: new FormControl(null),
    });
  }

  fetchBrands() {
    this.isLoading = true;
    this.http.get('http://localhost:3000/brands')
      .subscribe(
        (res: IResponse) => { this.cars = res.data; this.isLoading = false; },
        (error) => this.isLoading = false
      );
  }

  newBrand() {
    this.isLoading = true;
    const body = {
      brand: this.newCarForm.controls.brand.value,
      model: this.newCarForm.controls.model.value
    };
    this.http.post('http://localhost:3000/brands', body)
      .subscribe(
        (res: IResponse) => this.isLoading = false,
        (error) => this.isLoading = false
      );
  }
}
