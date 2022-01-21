import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private user$: Observable<User>;

    constructor(public afAuth: AngularFireAuth, public router: Router) {
        this.user$ = this.afAuth.authState;
    }

    get user () {
        return this.user$;
    }

    async register(email: string, password: string) {
        const res = await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['todo']);
    }

    async login(email: string, password: string) {
        const res = await this.afAuth.auth.signInWithEmailAndPassword(email, password);
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['todo']);
    }

    async loginWithGoogle() {
        const res = await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
        localStorage.setItem('user', JSON.stringify(res.user));
        this.router.navigate(['todo']);
    }

    async logout() {
        await this.afAuth.auth.signOut();
        localStorage.removeItem('user');
        this.router.navigate(['auth/login']);
    }

    get isLoggedIn(): boolean {
        const user = JSON.parse(localStorage.getItem('user'));
        return user !== null;
    }

    async deleteUser() {
        await this.afAuth.auth.currentUser.delete();
        this.router.navigate(['auth/register']);
    }

    async sendPasswordResetEmail(email: string) {
        return await this.afAuth.auth.sendPasswordResetEmail(email, { url: 'http://localhost:4200/profile' });
    }
}
