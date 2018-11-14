import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: 'login.component.html',
    styleUrls: ['login.component.css']
})

export class LoginComponent implements OnInit {
    loginForm: FormGroup;
    err: boolean;
    constructor(private _formBuilder: FormBuilder, private _router: Router) {
        this.err = false;
    }
    ngOnInit() {
        this.setForm();
    }
    setForm() {
        this.loginForm = this._formBuilder.group({
            Username: ['', [Validators.required]],
            Password: ['', [Validators.required]]
        });
    }
    onSubmit({ value, valid }: { value: any, valid: boolean }) {
        if (valid) {
            this.err = false;
            localStorage.setItem('auth', 'abc');
            this._router.navigate(['/dashboard']);
        } else {
            this.err = true;
        }
    }
}
