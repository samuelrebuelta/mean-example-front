import { Component, OnInit } from '@angular/core';
import { IResponse } from 'src/app/models/response.model';
import { HttpClient } from '@angular/common/http';
import { ToastService } from 'src/app/shared/components/toast/toast.service';
import { ToastTypes } from 'src/app/models/toast.model';

@Component({
  selector: 'app-cars',
  templateUrl: './cars.component.html',
  styleUrls: ['./cars.component.scss']
})
export class CarsComponent implements OnInit {

  cars: Array<any>;
  selectedBrand: any;

  // Spinner
  carListLoading = 0;
  newCarLoading = 0;
  modelListLoading = 0;

  constructor(
    private http: HttpClient,
    private toastService: ToastService
  ) { }

  ngOnInit() {
    this.fetchBrands();
  }

  fetchBrands() {
    this.carListLoading++;
    this.http.get('http://localhost:3000/brands')
      .subscribe(
        (res: IResponse) => { this.cars = res.data; this.carListLoading--; this.refreshModels(); },
        (error) => { this.carListLoading--; this.toastService.sendMessage({ type: ToastTypes.ERROR, message: error.error.message }); }
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
        (res: IResponse) => {
          this.newCarLoading--;
          this.fetchBrands();
          this.toastService.sendMessage({ type: ToastTypes.SUCCESS, message: res.message });
        },
        (error) => { this.newCarLoading--; this.toastService.sendMessage({ type: ToastTypes.ERROR, message: error.error.message }); }
      );
  }

  onDeleteBrand(id) {
    this.carListLoading++;
    this.http.delete(`http://localhost:3000/brands/${id}/delete`)
      .subscribe(
        (res: IResponse) => {
          this.carListLoading--;
          this.fetchBrands();
          this.toastService.sendMessage({ type: ToastTypes.SUCCESS, message: res.message });
          this.selectedBrand = null;
        },
        (error) => { this.carListLoading--; this.toastService.sendMessage({ type: ToastTypes.ERROR, message: error.error.message }); }
      );
  }

  onUpdateBrand(event) {
    this.carListLoading++;
    const id = event.id;
    const value = event.value;
    this.http.patch(`http://localhost:3000/brands/${id}/update`, { value })
      .subscribe(
        (res: IResponse) => {
          this.carListLoading--;
          this.fetchBrands();
          this.toastService.sendMessage({ type: ToastTypes.SUCCESS, message: res.message });
          this.selectedBrand = null;
        },
        (error) => { this.carListLoading--; this.toastService.sendMessage({ type: ToastTypes.ERROR, message: error.error.message }); }
      );
  }

  refreshModels() {
    if (this.selectedBrand) {
      this.selectedBrand = this.cars.find(el => el.brandName === this.selectedBrand.brandName);
    }
  }

  onDeleteModel(event) {
    this.modelListLoading++;
    this.http.delete(`http://localhost:3000/brands/${event.id}/models/${event.modelId}/delete`)
      .subscribe(
        (res: IResponse) => {
          this.modelListLoading--;
          this.fetchBrands();
          this.toastService.sendMessage({ type: ToastTypes.SUCCESS, message: res.message });
          this.selectedBrand = null;
        },
        (error) => { this.modelListLoading--; this.toastService.sendMessage({ type: ToastTypes.ERROR, message: error.error.message }); }
      );
  }

}
