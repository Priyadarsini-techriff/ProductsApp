import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';
import { UserService } from './service/user.service';
import { ToastrModule } from 'ngx-toastr';
import { ProductDetailsComponent } from './product-details/product-details.component'; 
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductNavBarComponent } from './product-nav-bar/product-nav-bar.component';
import { EditProductComponent } from './edit-product/edit-product.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import {NgConfirmModule} from 'ng-confirm-box';
import { LoginComponent } from './login/login.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { TokenInterceptor } from './interceptors/token.interceptor';




@NgModule({
  declarations: [
    AppComponent,
    ProductListComponentComponent,
    ProductDetailsComponent,
    ProductAddComponent,
    ProductNavBarComponent,
    EditProductComponent,
    PageNotFoundComponentComponent,
    LoginComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ToastrModule.forRoot(),
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    NgConfirmModule,
    FontAwesomeModule, BrowserAnimationsModule,
  ],
  providers: [UserService,
  {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,
  multi:true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
