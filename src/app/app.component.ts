import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl } from '@angular/forms';

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
      brand: new FormControl(),
      model: new FormControl(),
    });
  }

  fetchCars() {
    this.isLoading = true;
    this.http.get('http://localhost:3000/fetch/example')
      .subscribe(
        (res: IResponse) => { this.cars = res.data; this.isLoading = false; },
        (error) => this.isLoading = false
      );
  }
}
