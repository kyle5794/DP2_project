import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ListSaleComponent } from './list-sale/list-sale.component';
import { AddSaleComponent } from './add-sale/add-sale.component';
import { EditSaleComponent } from './edit-sale/edit-sale.component';
const routes: Routes = [
    {path: '', redirectTo: './app', pathMatch: 'full'},
    {path: 'add-product/add-product', component: AddProductComponent},
    {path: 'list-products/list-products', component: ListProductsComponent},
    {path: 'edit-product/edit-product/:id', component: EditProductComponent},
    {path: 'add-sale/add-sale', component: AddSaleComponent},
    {path: 'list-sale/list-sale', component: ListSaleComponent},
    {path: 'edit-sale/edit-sale/:id', component: EditSaleComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}