import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'firebase';
import { AuthService } from 'src/app/auth/shared/services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    user$: Observable<User>;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.user$ = this.authService.user;
    }

    logoutUser() {
        this.authService.logout();
    }
}
