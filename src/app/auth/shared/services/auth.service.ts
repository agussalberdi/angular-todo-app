import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/auth';
import { auth } from 'firebase/app';
import { User } from 'firebase';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    user: User;

    constructor(public afAuth: AngularFireAuth, public router: Router) {
        this.afAuth.authState.subscribe(user => {
            if (user) {
              this.user = user;
              localStorage.setItem('user', JSON.stringify(this.user));
            } else {
              localStorage.setItem('user', null);
            }
        });
    }

    async login(email: string, password: string) {
        await this.afAuth.auth.signInWithEmailAndPassword(email, password);
        this.router.navigate(['todo']);
    }

    async register(email: string, password: string) {
        await this.afAuth.auth.createUserWithEmailAndPassword(email, password);
        this.router.navigate(['todo']);
    }

    async sendPasswordResetEmail(email: string) {
        return await this.afAuth.auth.sendPasswordResetEmail(email, { url: 'http://localhost:4200/profile' });
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

    async loginWithGoogle() {
        await this.afAuth.auth.signInWithPopup(new auth.GoogleAuthProvider());
        this.router.navigate(['todo']);
        // const  user  =  JSON.parse(localStorage.getItem('user'));
        // return  user  !==  null;
    }

    async deleteUser() {
        await this.afAuth.auth.currentUser.delete();
        this.router.navigate(['auth/register']);
    }
}
