import { Component, OnInit } from "@angular/core";
import { TodoService } from "../Service/TodoService";
import { ITodo } from "../Interface/ITodo";
import { Observable } from "rxjs";


@Component({
    standalone: true,
    selector: "todo-list",
    templateUrl: "./TodoList.component.html",
    styleUrls: ["./TodoList.component.css"]

})

export class TodoListComponent implements OnInit {

    todos!: Observable<ITodo[]>;
    constructor(private TodoListService: TodoService) { }
    ngOnInit(): void {
        this.todos = this.TodoListService.GetAllTodos();
    }
}