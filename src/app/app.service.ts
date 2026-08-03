import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AppService {
  base_url = 'http://mybackend.com/api/';
  tasks_endpoint = 'tasks';

  constructor(private http: HttpClient) {}

  // Gets all tasks
  getTasks(): Observable<any> {
    return this.http.get<any>(this.base_url + this.tasks_endpoint).pipe(
      map(res => res || []),
      catchError(error => throwError(() => error.message || error))
    );
  }

  // Creates a task
  createTask(task: any): Observable<any> {
    return this.http.post(this.base_url + this.tasks_endpoint, task).pipe(
      map(res => res || []),
      catchError(error => throwError(() => error.message || error))
    );
  }

  // Updates a Task
  updateTask(update: any): Observable<any> {
    return this.http.put<any>(this.base_url + this.tasks_endpoint, update).pipe(
      map(res => res || []),
      catchError(error => throwError(() => error.message || error))
    );
  }

  // Deletes a Task
  deleteTask(taskId: any): Observable<any> {
    return this.http.delete<any>(`${this.base_url + this.tasks_endpoint}/${taskId}`).pipe(
      map(res => res || []),
      catchError(error => throwError(() => error.message || error))
    );
  }
}
