import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MaterialModule } from './../core/material.module';

import { NavbarComponent } from './components/navbar/navbar.component';
import { ImageUploaderComponent } from './components/image-uploader/image-uploader.component';
import { DisplayDataComponent } from './components/display-data/display-data.component';

@NgModule({
    declarations: [
        NavbarComponent,
        ImageUploaderComponent,
        DisplayDataComponent
    ],
    imports: [ 
        CommonModule,
        MaterialModule,
        RouterModule
    ],
    exports: [
        NavbarComponent,
        ImageUploaderComponent,
        DisplayDataComponent
    ],
    providers: [],
})
export class SharedModule {}