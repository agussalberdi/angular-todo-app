import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './../core/material.module';

import { NavbarComponent } from './components/navbar/navbar.component';

@NgModule({
    declarations: [
        NavbarComponent
    ],
    imports: [ 
        CommonModule,
        MaterialModule
    ],
    exports: [
        NavbarComponent
    ],
    providers: [],
})
export class SharedModule {}