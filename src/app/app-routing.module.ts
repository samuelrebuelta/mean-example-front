import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';


const routes: Routes = [
  {
    path: '',
    component: MainComponent,
    children: [
      { path: 'cars', loadChildren: './modules/cars/cars.module#CarsModule' },
      { path: 'todos', loadChildren: './modules/todos/todos.module#TodosModule' },
      { path: '', redirectTo: '/todos', pathMatch: 'full' },
    ]
  },
  { path: '**', redirectTo: '/todos' },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
