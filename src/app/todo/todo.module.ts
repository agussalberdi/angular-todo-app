import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
<<<<<<< HEAD
import { MaterialModule } from './../material/material.module';

import { TodoRoutingModule } from './todo-routing.module';
import { SharedModule } from './../shared/shared.module';

import { ToDoComponent } from './todo.component';
import { ToDoService } from './services/todo.service';
=======
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../core/material.module';

import { ToDoComponent } from './todo.component';
import { ToDoService } from './shared/services/todo.service';

import { AuthGuard } from '../auth/shared/guards/auth.guard';

const routes: Routes = [
    { path: '', component: ToDoComponent, canActivate: [AuthGuard] }
];
>>>>>>> 2b05f96a752e099bcbf65524d0d7a8d91abec70c

@NgModule({
    declarations: [
        ToDoComponent
    ],
<<<<<<< HEAD
    imports: [
        CommonModule,
        MaterialModule,
        TodoRoutingModule,
        SharedModule
=======
    imports: [ 
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        MaterialModule
    ],
    exports: [
        ToDoComponent
>>>>>>> 2b05f96a752e099bcbf65524d0d7a8d91abec70c
    ],
    providers: [
        ToDoService
    ],
})
<<<<<<< HEAD
export class ToDoModule {}
=======
export class ToDoModule {}
>>>>>>> 2b05f96a752e099bcbf65524d0d7a8d91abec70c
