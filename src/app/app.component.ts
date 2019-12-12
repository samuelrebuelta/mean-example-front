import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { delay } from 'rxjs/operators';

interface IResponse {
  message: string;
  data: any;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'Mean example App';
  cars: Array<any>;
  newCarForm: FormGroup;

  // Spinner
  brandListLoading = 0;
  newBrandLoading = 0;

  constructor(
    private http: HttpClient,
    private fb: FormBuilder
  ) {
    this.newCarForm = this.fb.group({
      brand: new FormControl(null, Validators.required),
      model: new FormControl(null),
    });
  }

  ngOnInit() {
    this.fetchBrands();
  }

  fetchBrands() {
    this.brandListLoading++;
    this.http.get('http://localhost:3000/brands')
      .pipe(delay(1000))
      .subscribe(
        (res: IResponse) => { this.cars = res.data; this.brandListLoading--; },
        (error) => this.brandListLoading--
      );
  }

  newBrand() {
    this.newBrandLoading++;
    const body = {
      brand: this.newCarForm.controls.brand.value,
      model: this.newCarForm.controls.model.value
    };
    this.http.post('http://localhost:3000/brands', body)
      .pipe(delay(1000))
      .subscribe(
        (res: IResponse) => { this.newBrandLoading--; this.newCarForm.reset(); this.fetchBrands(); },
        (error) => this.newBrandLoading--
      );
  }
}
