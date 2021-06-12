import {Component, OnInit} from "@angular/core";

@Component({selector: "app-data-binding", templateUrl: "./data-binding.component.html", styleUrls: ["./data-binding.component.css"]})
export class DataBindingComponent implements OnInit {
  taskId: number = 15;
  taskStatus: string = "offline";
  alloweNewTask: boolean = true;
  taskCreationStatus = "No tasks";

  constructor() {
    setTimeout(() => {
      this.alloweNewTask = false;
    }, 2000);
  }
  getTaskStatus() {
    return this.taskStatus;
  }
  handleCreateTask() {
    this.taskCreationStatus = "Task was created";
  }

  ngOnInit(): void {}
}
