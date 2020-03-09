import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';

import { MaterialModule } from '../core/material.module';

import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {
        path:  'auth',        
        children: [
            { path: '', pathMatch: 'full', redirectTo: 'login' },
            { path:  'login', component:  LoginComponent},
            { path:  'register', component:  RegisterComponent },
        ]
    }
];

@NgModule({
    declarations: [
        RegisterComponent,
        LoginComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild(routes),
        MaterialModule,
        ReactiveFormsModule
    ],
    exports: [],
    providers: [],
})
export class AuthModule {}