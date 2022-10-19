import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { ToDoService } from '../services/to-do.service';
import { ToDo } from './toDo.model';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-to-do-overview',
  templateUrl: './to-do-overview.component.html',
  styleUrls: ['./to-do-overview.component.css']
})
export class ToDoOverviewComponent implements OnInit, AfterViewChecked {

  dataSource: MatTableDataSource<ToDo> = new MatTableDataSource<ToDo>;
  displayedColumns: String[] = ["complete", "description"];
  toDoService: ToDoService;

  constructor(toDoService: ToDoService, http: HttpClient) {
    this.toDoService = new ToDoService(http);
    this.toDoService.fetchToDos();
    this.dataSource.data = this.toDoService.getToDos();
  }

  ngOnInit(): void {
  }

  ngAfterViewChecked() {
    this.dataSource.data = this.toDoService.getToDos();
  }

  updateToDo(toDo: ToDo) {
    toDo.setComplete(!toDo.isComplete());
     // implement call to service and in service implement updateToDo to make a put to server and do the thing
  }

}
