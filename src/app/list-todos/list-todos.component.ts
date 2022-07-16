import { Component, OnInit } from '@angular/core';

export class Todo {
  constructor(
    public id : number,
    public description :string,
    public done: boolean,
    public targetDate: Date
    ){

    }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  public searchTodo: any = '';
  
  todos = [
    new Todo(1, 'learn to paint',false,new Date()),
    new Todo(2, 'learn to sing',false,new Date()),
    new Todo(3, 'learn to cook',false,new Date())
  ];
    // todos = [
    //   {id:1, description: 'Learn to paint'},
    //   {id:2, description: 'Learn to sing'},
    //   {id:3, description: 'Learn to cook'},
    // ]

  // todo = {
  //   id : 1,
  //   description: 'Learn to paint'
  // }
  constructor() { }

  ngOnInit() {
  }

}
