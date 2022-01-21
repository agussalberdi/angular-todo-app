import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/auth/shared/services/auth.service';

@Component({
    selector: 'app-navbar',
    templateUrl: './navbar.component.html',
    styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
    isLoggedIn: boolean;

    constructor(private authService: AuthService) {}

    ngOnInit() {
        this.isLoggedIn = this.authService.isLoggedIn;
    }

    logoutUser() {
        this.authService.logout();
    }
}
