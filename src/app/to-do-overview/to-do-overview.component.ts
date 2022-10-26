import { Component, ElementRef, OnInit, AfterViewChecked } from '@angular/core';
import { ToDoService } from '../services/to-do.service';
import { ToDo } from './toDo.model';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { ViewChild } from '@angular/core'

@Component({
  selector: 'app-to-do-overview',
  templateUrl: './to-do-overview.component.html',
  styleUrls: ['./to-do-overview.component.css']
})
export class ToDoOverviewComponent implements OnInit, AfterViewChecked {

  @ViewChild('toDoInput') toDoInput!: ElementRef;

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
     this.toDoService.updateToDo(toDo);
     this.dataSource.data = this.toDoService.getToDos();
  }

  createToDo(event: any) {
    this.toDoService.createToDo(this.toDoInput.nativeElement.value);
//     this.toDoService.addToDo(new ToDo('changeplease', this.toDoInput.nativeElement.value, false));
    this.dataSource.data = this.toDoService.getToDos();
    this.toDoInput.nativeElement.value = "";
  }

}
