import { Injectable } from '@angular/core';
import { ToDo } from '../to-do-overview/toDo.model';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { AppModule } from '../app.module'

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  private http: HttpClient;
  private toDos: ToDo[] = [];

  constructor(http: HttpClient) { this.http = http; }

  public getToDos(): ToDo[] {
    return this.toDos;
  }

  public addToDo(toDo: ToDo) {
    this.toDos.push(toDo);
  }

  public fetchToDos(): void {
   this.http.get("http://localhost:666/api/todo").subscribe((data: any) => {
    for(let i = 0; i < data.length; i++) {
      this.toDos.push(new ToDo(data[i].id, data[i].taskDescription, data[i].isComplete));
    }
   })
  }

  public createToDo(newTaskDescription: String): void {
      this.http.post('http://localhost:666/api/todo', { taskDescription: newTaskDescription }).subscribe(data => {
        console.log(data);
      })
    this.fetchToDos();
  }

  public updateToDo(toDo: ToDo): void {
    console.log("updateToDo() isn't implemented yet");
  }

  public deleteToDo(): void {
    console.log("deleteToDo() isn't implemented yet");
  }

}
