import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {

  taskUrl = 'http://localhost:8080/tasks';
  

  constructor( private http: HttpClient) { }

  buscarTodos(){
    return this.http.get<any[]>(`${this.taskUrl}`)
  }

}
