import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { _throw } from 'rxjs/observable/throw';
import { catchError, map } from 'rxjs/operators';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class AppService {
  base_url: string = "http://mybackend.com/api/";
  tasks_endpoint = "tasks";
  constructor(private http: HttpClient) {}

  //Gets all tasks
  getTasks(): Observable<any>  {
    return this.http.get<any>(this.base_url + this.tasks_endpoint)
    .pipe(
     map(res => res || []),
     catchError(error => _throw(error.message || error))
    )
  }
  //Creates a task
  createTask(task): Observable<any>  {
    return this.http.post(this.base_url + this.tasks_endpoint, task)
    .pipe(
     map(res => res || []),
     catchError(error => _throw(error.message || error))
    )
  } //createTask
  //
  //Updates a Task
  updateTask(update): Observable<any> {
    return this.http.put<any>(this.base_url + this.tasks_endpoint, update)
    .pipe(
     map(res => res || []),
     catchError(error => _throw(error.message || error))
    )
  } //updateTask
  //
  //Deletes a Task
  deleteTask(taskId): Observable<any> {
    return this.http.delete<any>(`${this.base_url + this.tasks_endpoint}/${taskId}`)
      .map(res => res.json());
  } //deleteTask
}
