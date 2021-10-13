import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Demo-Angular-App';
  todoItem = "";
  showTodoList = false;
  name?: String // Optional arg => name can be undefined
  todoList: String[] = [];

  addTodoItem() {
    this.todoList.push(this.title);
    this.title = '';
  }

  clearList() {
    this.todoList = [];
  }
}
