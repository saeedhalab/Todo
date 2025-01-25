import { Observable, of } from "rxjs";
import { ITodo } from "../Interface/ITodo";
import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root'
})
export class TodoService {

    public Todos: ITodo[] = [];

    public AddTodo(title: string, description: string) {
        this.Todos.push({ Id: this.Todos.length + 1, Title: title, Description: description, IsDone: false });
    }

    public ToggleTodo(id: number) {
        let todo = this.Todos.find(todo => todo.Id === id);
        if (!todo) {
            console.log("cant find todo");
        } else {
            todo.IsDone = !todo.IsDone;
        }
    }

    public GetAllTodos(): Observable<ITodo[]> {
        return of(this.Todos);
    }

    public RemoveTodo(id: number) {
        let index = this.Todos.findIndex(todo => todo.Id === id);

        if (index === -1) {
            console.error("Not found Todo");
            return;
        }
        this.Todos.splice(index, 1);
    }

}