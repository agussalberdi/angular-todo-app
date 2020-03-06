import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../core/material.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';

@NgModule({
    declarations: [
        NavbarComponent,
        ImageUploaderComponent
    ],
    imports: [ 
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    exports: [
        NavbarComponent,
        ImageUploaderComponent
    ],
    providers: [],
})
export class SharedModule {}
