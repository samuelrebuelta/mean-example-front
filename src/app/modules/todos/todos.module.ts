import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TodosComponent } from './todos.component';
import { TodosRoutingModule } from './todos-routing.module';
import { SharedModule } from 'src/app/shared/shared.module';
import { ListItemComponent } from './components/list-item/list-item.component';



@NgModule({
  declarations: [
    TodosComponent,
    ListItemComponent,
  ],
  imports: [
    CommonModule,
    TodosRoutingModule,
    SharedModule,
  ]
})
export class TodosModule { }
