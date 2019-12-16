import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CarsRoutingModule } from './cars-routing.module';
import { CarsComponent } from './cars.component';
import { PostCarFormComponent } from './components/post-car-form/post-car-form.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { ModelListComponent } from './components/model-list/model-list.component';
import { SharedModule } from 'src/app/shared/shared.module';



@NgModule({
  declarations: [
    CarsComponent,
    PostCarFormComponent,
    CarListComponent,
    ModelListComponent
  ],
  imports: [
    CommonModule,
    CarsRoutingModule,
    SharedModule,
  ]
})
export class CarsModule { }
