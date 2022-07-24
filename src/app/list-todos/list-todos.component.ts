import { Component, OnInit } from '@angular/core';
import { TodoDataService } from '../service/data/todo-data.service';
import { Router } from '@angular/router';

export class Todo {
  constructor(
    public id: number,
    public description: string,
    public done: boolean,
    public targetDate: Date
  ) {

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  public searchTodo: any = '';

  todos: Todo[]
  message: string
  // [
  //   new Todo(1, 'learn to paint',false,new Date()),
  //   new Todo(2, 'learn to sing',false,new Date()),
  //   new Todo(3, 'learn to cook',false,new Date())
  // ];
  // todos = [
  //   {id:1, description: 'Learn to paint'},
  //   {id:2, description: 'Learn to sing'},
  //   {id:3, description: 'Learn to cook'},
  // ]

  // todo = {
  //   id : 1,
  //   description: 'Learn to paint'
  // }
  constructor(
    private todoDataService: TodoDataService,
    private router: Router
  ) { }

  ngOnInit() {
    this.refreshTodos();
  }

  refreshTodos() {
    this.todoDataService.retrieveAllTodos('vinodh').subscribe(
      response => {
        console.log(response);
        this.todos = response;
      }
    )
  }
  deleteTodo(id) {
    console.log(`delete todo ${id}`);
    this.todoDataService.deleteTodo('vinodh', id).subscribe(
      response => {
        console.log(response);
        this.message = `Delete of Todo ${id} Successful!`;
        this.refreshTodos();
      }
    )
  }

  updateTodo(id) {
    console.log(`update ${id}`);
    this.router.navigate(['todos', id])
  }

  addTodo() {
    this.router.navigate(['todos', -1])
  }
}
