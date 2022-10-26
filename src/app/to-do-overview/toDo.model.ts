export interface ToDoInterface {
   id: String;
   taskDescription: String;
   isComplete: String;
   modifiedDate: String;
   createdDate: String;
}

export class ToDo {

  private id: String;
  private taskDescription: String;
  private complete: boolean;

  constructor (id: String, taskDescription: String, complete: boolean) {
    this.id = id;
    this.taskDescription = taskDescription;
    this.complete = complete;
  }

  public getId(): String {
    return this.id;
  }

  public setId(id: String) {
    this.id = id;
  }

  public setComplete(complete: boolean) {
    this.complete = complete;
  }

  public setTaskDescription(taskDescription: String) {
    this.taskDescription = taskDescription;
  }

  public getTaskDescription(): String {
    return this.taskDescription;
  }

  public isComplete(): boolean {
    return this.complete;
  }

}
