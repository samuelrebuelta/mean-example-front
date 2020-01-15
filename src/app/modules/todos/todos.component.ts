import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.scss']
})
export class TodosComponent implements OnInit {

  todoList: Array<any>;
  newItemValue: string;

  constructor(
    private http: HttpClient,
  ) { }

  ngOnInit() {
    this.fetchTodoList();
  }

  fetchTodoList() {
    this.http.get('http://localhost:3000/todoList')
      .subscribe((res: any) => this.todoList = res.data);
  }

  updateItem(item) {
    if (item && item.description && item.description !== '') {
      const body = { description: item.description, completed: item.completed };
      this.http.put(`http://localhost:3000/todoItem/${item._id}/update`, body)
        .subscribe(() => this.fetchTodoList());
    }
  }

  postItem() {
    if (this.newItemValue && this.newItemValue !== '') {
      const body = { description: this.newItemValue };
      this.http.post('http://localhost:3000/todoItem', body)
        .subscribe(() => {
          this.newItemValue = null;
          this.fetchTodoList();
        }
        );
    }
  }

}
