import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Router, ActivatedRoute } from '@angular/router';

@Injectable({
    providedIn: "root"
})
export class NotificationService {

    private messageDomain = {
        message: '',
        type: '',
        code: ''
    }

    private message = new BehaviorSubject<any>(this.messageDomain);

    message$ = this.message.asObservable();


    constructor() { }

    showSuccess(message) {

        this.showNotificationMessage(message, 'success', 200);

    }

    showInfo(message) {

        this.showNotificationMessage(message, 'info', null);

    }

    showWarn(message) {
        this.showNotificationMessage(message, 'warn', null);

    }

    showError(message, code = 500) {
        this.showNotificationMessage(message, 'error', code);

    }

    private showNotificationMessage(message, type, code) {
        this.message.next({
            code: code,
            message: message,
            type: type
        });
    }

}