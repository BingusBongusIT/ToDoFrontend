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
   this.http.get("http://bingusbongus.azurewebsite.net/api/todo").subscribe((data: any) => {
    this.toDos = [];
    for(let i = 0; i < data.length; i++) {
      this.toDos.push(new ToDo(data[i].id, data[i].taskDescription, data[i].isComplete));
    }
   })
  }

  public createToDo(newTaskDescription: String): void {
      this.http.post('http://bingusbongus.azurewebsite.net/api/todo', { taskDescription: newTaskDescription }).subscribe((data: any) => {
        for(let i = 0; i < this.toDos.length; i++) {
          if (this.toDos[i].getId() == "changeplease" && data.taskDescription == this.toDos[i].getTaskDescription()) {
            this.toDos[i].setId(data.id);

          }
        }
      })
  }

  public updateToDo(toDo: ToDo): void {
    let todo1!: ToDo;
    for(let i = 0; i < this.toDos.length; i++) {
      if (this.toDos[i].getId() == toDo.getId()) {
        todo1 = this.toDos[i];
      }
    }
    this.http.put('http://bingusbongus.azurewebsite.net/api/todo/'+todo1.getId(), { isComplete: todo1.isComplete()}).subscribe();
  }

  public deleteToDo(toDo: ToDo): void {
    for(let i = 0; i < this.toDos.length; i++) {
      if (this.toDos[i].getId() == toDo.getId()) {
        this.toDos.splice(i,1);
      }
    }
    this.http.delete('http://bingusbongus.azurewebsite.net/api/todo/'+toDo.getId()).subscribe();
  }

}
