import { Component, OnInit } from '@angular/core';
import { User } from 'firebase';
import { AuthService } from '../auth/shared/services/auth.service';

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
            this.user = user;
        });
    }

    resetPassword() {
        this.authService.sendPasswordResetEmail(this.authService.afAuth.auth.currentUser.email);
    }

    deleteUser() {
        this.authService.deleteUser();
    }

}
