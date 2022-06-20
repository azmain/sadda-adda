import { OnInit, Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NotificationService } from '@module/shared/notification/services/notification.service';


@Component({
    selector: "sd-share-holder",
    templateUrl: './share-holders.component.html',
    styleUrls: ['./share-holders.component.css']
})
export class ShareHoldersComponent implements OnInit{


    constructor(
        private messageService: MessageService,
        private notificationService: NotificationService){

    }

    ngOnInit(){
       
    }

} 