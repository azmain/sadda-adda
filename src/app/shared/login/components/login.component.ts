import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validators } from '@angular/forms';
import {Router} from "@angular/router";

import {MessageService} from 'primeng/api';
import { LoginService } from '../services/service-api/login.service';
import { AuthService } from '@module/shared/auth/services/AuthService';

@Component({
    selector: 'login-component',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

    loginForm: FormGroup;

    constructor(
        private messageService: MessageService,
        private loginService: LoginService,
        private router: Router,
        private authService: AuthService
    ){

    }

    ngOnInit(){
        this.prepareLoginFOrm();
    }

    prepareLoginFOrm(){
        this.loginForm = new FormGroup({
            userNameOrEmail: new FormControl('', [Validators.required]),
            password: new FormControl('',[Validators.required])
        });
    }

    login(){
        this.loginForm.markAllAsTouched();
        if(this.loginForm.invalid){
            this.messageService.add({severity:'error', summary: 'Error Message', detail:'Form is invalid.'});

            return;
        }

        var loginData = this.loginForm.value;
        this.loginService.login(loginData)
            .subscribe(
                response=>{
                    console.log(response);
                    if(response && response.jwt){
                        this.authService.handleToken(response);
                        this.authService.changeAuthStatus(true);
                        this.router.navigate(["/"]);
                    }
                    else{
                        this.messageService.add({severity:'error', summary: 'Error Message', detail: 'Invalid username or password.'});
                    }
                },
                errorResponse=>{
                    let error = errorResponse.error;
                    //console.log(error);
                    this.messageService.add({severity:'error', summary: 'Error Message', detail: error.message});
                }
            );
    }
}