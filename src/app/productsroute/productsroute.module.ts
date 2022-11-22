import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProductsrouteRoutingModule } from './productsroute-routing.module';
import { ProductAddComponent } from '../product-add/product-add.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { ProductListComponentComponent } from '../product-list-component/product-list-component.component';
import { ProductNavBarComponent } from '../product-nav-bar/product-nav-bar.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations: [ProductAddComponent,ProductDetailsComponent,EditProductComponent,ProductListComponentComponent,ProductNavBarComponent],
    imports: [
        CommonModule,
        ProductsrouteRoutingModule,
        FormsModule,
        ReactiveFormsModule, 
    ]
})
export class ProductsrouteModule { }
