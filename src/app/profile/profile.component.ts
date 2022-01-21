import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AuthService } from '../auth/shared/services/auth.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './profile.component.html',
    styleUrls: ['./profile.component.scss']
})
export class UserProfileComponent implements OnInit {
    user$: Observable<User>;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.user$ = this.authService.afAuth.user;
    }

    resetPassword() {
        this.authService.sendPasswordResetEmail(this.authService.afAuth.auth.currentUser.email);
    }

    deleteUser() {
        this.authService.deleteUser();
    }
}
