import { Component, OnInit } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NotificationService } from '../services/notification.service';
import { Observable } from 'rxjs';


@Component({
    selector: "sd-notification",
    templateUrl: "./notification.component.html"
})
export class NotificationComponent implements OnInit{

    constructor(
        private messageService: MessageService,
        private notificationService: NotificationService
    ){
        
    }

    ngOnInit(){
        this.notificationService.message$.subscribe(message=>{
            this.showNotification(message.message, message.type, message.code);
        });
    }

    private showNotification(message, type, code) {
        
        this.messageService.add({severity: type, detail: message});
    }
}