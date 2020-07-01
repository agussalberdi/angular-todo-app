import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';

import { TodoRoutingModule } from './todo-routing.module';
import { SharedModule } from './../shared/shared.module';

import { ToDoComponent } from './todo.component';
import { ToDoService } from './services/todo.service';

@NgModule({
    declarations: [
        ToDoComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        TodoRoutingModule,
        SharedModule
    ],
    providers: [
        ToDoService
    ],
})
export class ToDoModule {}
