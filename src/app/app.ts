import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppService } from './app.service';

@Component({
  selector: 'app-root',
  imports: [CommonModule, FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class App implements OnInit {
  tasks: any[] = [];
  myTask = '';
  taskEdit: any;
  editMode = false;
  loading = false;

  constructor(private appservice: AppService) {}

  ngOnInit() {
    this.getAllTasks();
  }

  getAllTasks() {
    this.appservice.getTasks().subscribe(data => {
      this.tasks = data;
    });
  }

  create() {
    this.loading = true;
    const postData = {
      description: this.myTask
    };

    this.appservice.createTask(postData).subscribe(() => {
      this.loading = false;
      this.getAllTasks();
      this.myTask = '';
    });
  }

  edit(task: any) {
    this.taskEdit = Object.assign({}, task);
    task.editing = true;
    this.editMode = true;
  }

  saveEdit(task: any) {
    this.appservice.updateTask(this.taskEdit).subscribe(() => {
      this.getAllTasks();
      task.editing = false;
      this.editMode = false;
    });
  }

  delete(task: any) {
    this.appservice.deleteTask(task.id).subscribe(() => {
      this.getAllTasks();
    });
  }
}
