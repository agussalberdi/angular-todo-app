import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { AuthService } from '../shared/services/auth.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.component.html',
    styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
    form: FormGroup;

    constructor(private fb: FormBuilder, private authService: AuthService) { }

    ngOnInit() {
        this.initForm();
    }

    private initForm() {
        this.form = this.fb.group({
            email: ['', Validators.email],
            password: ['', Validators.required]
        });
    }

    handleRegister() {
        const email = this.form.get('email').value;
        const password = this.form.get('password').value;

        this.authService.register(email, password);
    }

    loginGoogle() {
        this.authService.loginWithGoogle();
    }

    get emailFormat() {
        const control = this.form.get('email');
        return control.hasError('email') && control.touched;
    }
    
    get passwordInvalid() {
        const control = this.form.get('password');
        return control.hasError('required') && control.touched;
    }
}
