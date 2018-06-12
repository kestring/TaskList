import { Component, OnInit } from '@angular/core';
import { TaskService } from '../services/task.service';
import * as $ from 'jquery';

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

  concluir(task){
    console.log("Teste " + task );
    this.taskService.concluirTarefa(task);
  }

  editar(task){
    console.log("Teste " + task );
  }

  excluir(task){
    console.log("Teste Excluir " + task );
    this.taskService.excluirTarefa(task);
    console.log("Teste Buscar " + task );
    this.buscarTodos();
    console.log("Teste Fim " );
  }

}
