import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';

import { AuthService } from '../auth/shared/services/auth.service';
import { FormGroup } from '@angular/forms';

@Component({
    selector: 'app-user-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    user: User;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.authService.afAuth.user.subscribe(user => {
            console.log(user);
            this.user = user;
        });
    }

    giveImage(form: FormGroup) {
        console.log(form.get('image').value);
    }

    deleteUser() {
        this.authService.deleteUser();
    }

}
