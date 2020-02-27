import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from '../auth/shared/guards/auth.guard';

import { DashboardComponent } from './dashboard.component';

const routes: Routes = [
    { path: '', component: DashboardComponent, canActivate: [AuthGuard] }
];

@NgModule({
    declarations: [
        DashboardComponent
    ],
    imports: [ 
        CommonModule,
        RouterModule.forChild(routes)
    ],
    exports: [
        DashboardComponent
    ],
    providers: [],
})
export class DashboardModule {}