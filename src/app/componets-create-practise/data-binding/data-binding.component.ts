import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-binding',
  templateUrl: './data-binding.component.html',
  styleUrls: ['./data-binding.component.css'],
})
export class DataBindingComponent implements OnInit {
  // taskId: number = 15;
  // taskStatus: string = "offline";
  // alloweNewTask: boolean = true;
  // taskCreationStatus = "No tasks";
  // taskName: string = "";
  username: string = '';
  usernameCreationStatus = 'No User';
  userCreated = false;
  user: string = '';

  constructor() {
    // setTimeout(() => {
    //   this.alloweNewTask = false;
    // }, 2000);
  }
  ngOnInit(): void {}

  // getTaskStatus() {
  //   return this.taskStatus;
  // }
  // handleCreateTask() {
  //   this.taskCreationStatus = "Task was created! Name of the task is " + this.taskName;
  // }
  // handleUpdateTaskName(e : Event) {
  //   this.taskName = (<HTMLInputElement>e.target).value;
  // }
  handleCreateUsername() {
    this.userCreated = true;
    this.user = this.username;
    this.username = '';
  }
}
