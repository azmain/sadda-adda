import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router, ActivatedRoute} from "@angular/router";

import {MessageService} from 'primeng/api';
import { LoginService } from '../services/service-api/login.service';
import { AuthService } from '@module/shared/auth/services/auth.service';
import { NotificationService } from '@module/shared/notification/services/notification.service';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    loginForm: FormGroup;

    constructor(
        private notificationService: NotificationService,
        private loginService: LoginService,
        private authService: AuthService
    ){}

    ngOnInit(){
        this.prepareLoginForm();
    }

    prepareLoginForm(){
        this.loginForm = new FormGroup({
            userNameOrEmail: new FormControl('', [Validators.required]),
            password: new FormControl('',[Validators.required])
        });
    }

    login(){
        this.loginForm.markAllAsTouched();
        if(this.loginForm.invalid){
            this.notificationService.showError("Form is Invalid");
            return;
        }

        var loginData = this.loginForm.value;
        this.loginService.login(loginData)
            .subscribe(
                response=>{
                    console.log(response);
                    if(response && response.jwt){
                        this.authService.loginUser(response);
                    }
                    else{
                        this.notificationService.showError('Invalid username or password.');
                    }
                },
                errorResponse=>{
                    let error = errorResponse.error;
                    //console.log(error);
                    this.notificationService.showError(error.message);
                }
            );
    }
}