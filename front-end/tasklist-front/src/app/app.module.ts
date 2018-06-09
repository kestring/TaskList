import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { AddTaskComponent } from './add-task/add-task.component';
import { TaskService } from "./services/task.service";
import { ListaTaskComponent } from './lista-task/lista-task.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    ListaTaskComponent
  ],
  imports: [
    HttpClientModule,
    MaterializeModule,
    BrowserModule
  ],
  providers: [TaskService],
  bootstrap: [AppComponent]
})
export class AppModule { }
