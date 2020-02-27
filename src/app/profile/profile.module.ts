import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserProfileComponent } from './profile.component';

@NgModule({
    declarations: [
        UserProfileComponent
    ],
    imports: [ CommonModule ],
    exports: [
        UserProfileComponent
    ],
    providers: [],
})
export class ProfileModule {}