import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../material/material.module';

import { ProfileRoutingModule } from './profile-routing.module';
import { SharedModule } from './../shared/shared.module';

import { UserProfileComponent } from './profile.component';

@NgModule({
    declarations: [
        UserProfileComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        ProfileRoutingModule,
        SharedModule
    ],
    providers: [],
})
export class ProfileModule {}
