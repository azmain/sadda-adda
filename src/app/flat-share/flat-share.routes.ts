import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ShareHoldersComponent } from './share-holders/components/share-holders.component';
import { ShareTransactionComponent } from './share-transactions/components/share-transaction.component';

const flatShareRoutes: Routes = [
    {
        path: 'share-holders',
        component: ShareHoldersComponent
    },
    {
        path: 'share-transactions',
        component: ShareTransactionComponent
    }
];
@NgModule({
    imports: [RouterModule.forChild(flatShareRoutes)],
    exports: [RouterModule]
})
export class FlatShareRoutingModule{}