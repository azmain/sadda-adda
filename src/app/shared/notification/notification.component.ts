import { Component } from '@angular/core';
import { MessageService } from 'primeng/api';


@Component({
    selector: "sd-notification",
    templateUrl: "./notification.component.html"
})
export class NotificationComponent{

    constructor(
        private messageService: MessageService
    ){
        
    }

    sendNotification(){

    }

    sendError(message){
        this.messageService.add(
            {
                severity:'error', 
                summary: 'Error Message', 
                detail: message
            }
        );
    }
}