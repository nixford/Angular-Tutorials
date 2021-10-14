import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from './todo.model';

@Injectable()
export class FormsService {

  constructor(public client: HttpClient) { }

  getTasks() {
    this.client.get<Todo[]>("https://jsonplaceholder.typicode.com/todos")
  }

  getTask(id: number) {
    this.client.get<Todo>(`https://jsonplaceholder.typicode.com/todos${id}`)
  }
  
}