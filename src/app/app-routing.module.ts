import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'Products', component: ProductListComponentComponent,canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'Products/new', component: ProductAddComponent , canActivate: [AuthGuard]},
  { path: 'Products/:productId/details', component: ProductDetailsComponent },
  { path: 'Products/:productId/edit', component: EditProductComponent, canActivate: [AuthGuard] },
  { path: '**', component:PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

