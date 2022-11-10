import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { UserService } from './service/user.service';
import { ToastrModule } from 'ngx-toastr';
import {NgxPaginationModule} from 'ngx-pagination';
import { ProductDetailsComponent } from './product-details/product-details.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductNavBarComponent } from './product-nav-bar/product-nav-bar.component';
import { EditProductComponent } from './edit-product/edit-product.component';


@NgModule({
  declarations: [
    AppComponent,
    ProductListComponentComponent,
    ProductDetailsComponent,
    ProductAddComponent,
    ProductNavBarComponent,
    EditProductComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    CommonModule
  ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
