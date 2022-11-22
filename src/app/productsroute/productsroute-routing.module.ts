import { NgModule} from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from '../edit-product/edit-product.component';
import { AuthGuard } from '../guards/auth.guard';
import { ProductAddComponent } from '../product-add/product-add.component';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import { ProductListComponentComponent } from '../product-list-component/product-list-component.component';



const routes: Routes = [
  { path: '', component: ProductListComponentComponent },
  { path: 'new', component: ProductAddComponent,canActivate:[AuthGuard] },
  { path: ':productId/details', component: ProductDetailsComponent ,canActivate:[AuthGuard]},
  { path: ':productId/edit', component: EditProductComponent,canActivate:[AuthGuard] },
  { path: '', redirectTo: 'Products', pathMatch: 'full' },
  
];
console.log("lazyloading...")
@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
 
})
export class ProductsrouteRoutingModule { }
