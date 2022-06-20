import { OnInit, Component } from '@angular/core';
import { MessageService } from 'primeng/api';
import { NotificationService } from '@module/shared/notification/services/notification.service';
import { ShareTransactionService } from '../services/share-transaction.service';


@Component({
    selector: "sd-share-transaction",
    templateUrl: './share-transaction.component.html',
    styleUrls: ['./share-transaction.component.css']
})
export class ShareTransactionComponent implements OnInit{


    scrollableCols = [
        { field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' },
        { field: 'year', header: 'Year' },
        { field: 'brand', header: 'Brand' },
        { field: 'color', header: 'Color' }
    ];

    frozenCols = [
        { field: 'brand', header: 'Brand' }
    ];

    cars5 = [
        {"brand": "VW", "year": 2012, "color": "Orange"},
        {"brand": "Audi", "year": 2011, "color": "Black"},
        {"brand": "Renault", "year": 2005, "color": "Gray"},
        {"brand": "BMW", "year": 2003, "color": "Blue"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange"},
        {"brand": "Volvo", "year": 2005, "color": "Black"},
        {"brand": "Honda", "year": 2012, "color": "Yellow"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange"},
        {"brand": "Ford", "year": 2000, "color": "Black"},
        {"brand": "Fiat", "year": 2013, "color": "Red"},
        {"brand": "VW", "year": 2012, "color": "Orange"},
        {"brand": "Audi", "year": 2011, "color": "Black"},
        {"brand": "Renault", "year": 2005, "color": "Gray"},
        {"brand": "BMW", "year": 2003, "color": "Blue"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange"},
        {"brand": "Volvo", "year": 2005, "color": "Black"},
        {"brand": "Honda", "year": 2012, "color": "Yellow"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange"},
        {"brand": "Ford", "year": 2000, "color": "Black"},
        {"brand": "Fiat", "year": 2013, "color": "Red"},
        {"brand": "VW", "year": 2012, "color": "Orange"},
        {"brand": "Audi", "year": 2011, "color": "Black"},
        {"brand": "Renault", "year": 2005, "color": "Gray"},
        {"brand": "BMW", "year": 2003, "color": "Blue"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange"},
        {"brand": "Volvo", "year": 2005, "color": "Black"},
        {"brand": "Honda", "year": 2012, "color": "Yellow"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange"},
        {"brand": "Ford", "year": 2000, "color": "Black"},
        {"brand": "Fiat", "year": 2013, "color": "Red"},
        {"brand": "VW", "year": 2012, "color": "Orange"},
        {"brand": "Audi", "year": 2011, "color": "Black"},
        {"brand": "Renault", "year": 2005, "color": "Gray"},
        {"brand": "BMW", "year": 2003, "color": "Blue"},
        {"brand": "Mercedes", "year": 1995, "color": "Orange"},
        {"brand": "Volvo", "year": 2005, "color": "Black"},
        {"brand": "Honda", "year": 2012, "color": "Yellow"},
        {"brand": "Jaguar", "year": 2013, "color": "Orange"},
        {"brand": "Ford", "year": 2000, "color": "Black"},
        {"brand": "Fiat", "year": 2013, "color": "Red"}
    ];


    constructor(
        private shareTransactionService: ShareTransactionService,
        private messageService: MessageService,
        private notificationService: NotificationService){

    }

    ngOnInit(){
        
    }

    

} 