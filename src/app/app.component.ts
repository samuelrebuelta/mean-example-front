import { Component, OnInit } from '@angular/core';
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
      brandName: new FormControl(null, Validators.required),
      modelDescription: new FormControl(null),
    });
  }

  ngOnInit() {
    this.fetchBrands();
  }

  fetchBrands() {
    this.brandListLoading++;
    this.http.get('http://localhost:3000/brands')
      .subscribe(
        (res: IResponse) => { this.cars = res.data; this.brandListLoading--; },
        (error) => this.brandListLoading--
      );
  }

  newBrand() {
    this.newBrandLoading++;
    const body = {
      brandName: this.newCarForm.controls.brandName.value,
      modelDescription: this.newCarForm.controls.modelDescription.value
    };
    this.http.post('http://localhost:3000/brands', body)
      .subscribe(
        (res: IResponse) => { this.newBrandLoading--; this.newCarForm.reset(); this.fetchBrands(); },
        (error) => this.newBrandLoading--
      );
  }

  deleteBrand(id) {
    this.brandListLoading++;
    this.http.delete(`http://localhost:3000/brands/${id}/delete`)
      .subscribe(
        (res: IResponse) => { this.brandListLoading--; this.fetchBrands(); },
        (error) => this.brandListLoading--
      );
  }
}
