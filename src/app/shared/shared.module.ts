import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../material/material.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
    declarations: [
        NavbarComponent,
        FooterComponent
    ],
    imports: [
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    exports: [
        NavbarComponent,
        FooterComponent
    ],
    providers: [],
})
export class SharedModule {}
