import { NgModule } from "@angular/core";
import { SaddaAddaSharedModule } from '@module/shared/sadda-adda-shared.module';
import { ShareTransactionComponent } from "./share-transactions/components/share-transaction.component";
import { FlatShareRoutingModule } from "./flat-share.routes";
import { ShareTransactionService } from "./share-transactions/services/share-transaction.service";
import { ShareHoldersComponent } from "./share-holders/components/share-holders.component";


@NgModule({

    declarations: [
        ShareTransactionComponent,
        ShareHoldersComponent
    ],
    imports: [
        FlatShareRoutingModule,
        SaddaAddaSharedModule
    ],
    providers: [
        ShareTransactionService
    ],
    bootstrap: [],
}) export class FlatShareModule{};