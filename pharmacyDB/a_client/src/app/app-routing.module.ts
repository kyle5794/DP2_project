import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import { ListProductsComponent } from './list-products/list-products.component';
import { AddProductComponent } from './add-product/add-product.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { CheckStockComponent} from './check-stock/check-stock.component';
const routes: Routes = [
    {path: '', redirectTo: './app', pathMatch: 'full'},
    {path: 'add-product/add-product', component: AddProductComponent},
    {path: 'list-products/list-products', component: ListProductsComponent},
    {path: 'edit-product/edit-product/:id', component: EditProductComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})

export class AppRoutingModule{}