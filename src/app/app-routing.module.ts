import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditProductComponent } from './edit-product/edit-product.component';
import { ProductAddComponent } from './product-add/product-add.component';

import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductListComponentComponent } from './product-list-component/product-list-component.component';

const routes: Routes = [
  { path: '', component: ProductListComponentComponent },
  { path: 'Products', component: ProductListComponentComponent },
  { path: 'Products/new', component: ProductAddComponent },
  { path: 'Products/:productId/details', component: ProductDetailsComponent },
  {path:'Products/:productId/edit',component:EditProductComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
