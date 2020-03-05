import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { SharedModule } from './../shared/shared.module';
import { MaterialModule } from './../core/material.module';

import { ToDoComponent } from './todo.component';
import { ToDoService } from './shared/services/todo.service';

import { AuthGuard } from '../auth/shared/guards/auth.guard';

const routes: Routes = [
    { path: '', component: ToDoComponent, canActivate: [AuthGuard] }
];

@NgModule({
    declarations: [
        ToDoComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild(routes),
        SharedModule,
        MaterialModule
    ],
    exports: [
        ToDoComponent
    ],
    providers: [
        ToDoService
    ],
})
export class ToDoModule {}