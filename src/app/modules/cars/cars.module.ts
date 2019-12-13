import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { HttpClientModule } from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { PostCarFormComponent } from './components/post-car-form/post-car-form.component';
import { CarListComponent } from './components/car-list/car-list.component';



@NgModule({
  declarations: [
    CarsComponent,
    PostCarFormComponent,
    CarListComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
  ]
})
export class CarsModule { }
