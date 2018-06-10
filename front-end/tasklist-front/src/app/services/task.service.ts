import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class TaskService {

  taskUrl = 'http://localhost:8080/tasks';
  //taskUrl = 'http://localhost:4200/api/tasks';

  constructor( private http: HttpClient) { }

  buscarTodos(){
    return this.http.get<any[]>(`${this.taskUrl}`)
  }

  concluirTarefa(task){
    
  }

  excluirTarefa(task){
    var urlExcluir = `${this.taskUrl}/remove/${task.id} ` ;
    console.log("URLEXCLUIR = " + urlExcluir );
    this.http.delete(urlExcluir).subscribe();
  }

}
