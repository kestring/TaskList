import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';

@Component({
  selector: 'app-lista-task',
  templateUrl: './lista-task.component.html',
  styleUrls: ['./lista-task.component.css']
})
export class ListaTaskComponent implements OnInit {

  taskList : Array<any>;

  constructor(private taskService: TaskService) { }

  ngOnInit() {
    this.buscarTodos();
  }

  buscarTodos(){
    this.taskService.buscarTodos().subscribe(dados => this.taskList = dados);
  }

}
