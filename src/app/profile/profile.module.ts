import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MaterialModule } from './../core/material.module';
import { SharedModule } from './../shared/shared.module';

import { UserProfileComponent } from './profile.component';
import { AuthGuard } from '../auth/shared/guards/auth.guard';

const routes: Routes = [
    { path: 'profile', component: UserProfileComponent, canActivate: [AuthGuard]}
];

@NgModule({
    declarations: [
        UserProfileComponent
    ],
    imports: [ 
        CommonModule,
        MaterialModule,
        SharedModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        UserProfileComponent
    ],
    providers: [],
})
export class ProfileModule {}