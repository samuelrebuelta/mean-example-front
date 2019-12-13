import { Component, OnInit } from '@angular/core';
import { IResponse } from 'src/app/models/response.model';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: Array<any>;

  // Spinner
  carListLoading = 0;
  newCarLoading = 0;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.fetchBrands();
  }

  fetchBrands() {
    this.carListLoading++;
    this.http.get('http://localhost:3000/brands')
      .subscribe(
        (res: IResponse) => { this.cars = res.data; this.carListLoading--; },
        (error) => this.carListLoading--
      );
  }

  onPostCar(carForm) {
    this.newCarLoading++;
    const brandName = carForm.controls.brandName.value ?
      carForm.controls.brandName.value.toLowerCase() : carForm.controls.brandName.value;
    const modelDescription = carForm.controls.modelDescription.value ?
      carForm.controls.modelDescription.value.toLowerCase() : carForm.controls.modelDescription.value;
    const body = { brandName, modelDescription };
    this.http.post('http://localhost:3000/brands', body)
      .subscribe(
        (res: IResponse) => { this.newCarLoading--; this.fetchBrands(); },
        (error) => this.newCarLoading--
      );
  }

  onDeleteBrand(id) {
    this.carListLoading++;
    this.http.delete(`http://localhost:3000/brands/${id}/delete`)
      .subscribe(
        (res: IResponse) => { this.carListLoading--; this.fetchBrands(); },
        (error) => this.carListLoading--
      );
  }

}
