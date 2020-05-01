import { NgModule } from "@angular/core";
import {InputTextModule} from 'primeng/inputtext';
import {ListboxModule} from 'primeng/listbox';
import {TableModule} from 'primeng/table';
import {ButtonModule} from 'primeng/button';
import {MessagesModule} from 'primeng/messages';
import {MessageModule} from 'primeng/message';
import {ToastModule} from 'primeng/toast';

@NgModule({

    imports: [
        //primeng
        InputTextModule,
        ListboxModule,
        TableModule,
        ButtonModule,
        MessagesModule,
        MessageModule,
        ToastModule
    ],
    exports: [
        //primeng
        InputTextModule,
        ListboxModule,
        TableModule,
        ButtonModule,
        MessagesModule,
        MessageModule,
        ToastModule
    ]
})
export class AngularPrimeModule{}