import { NgModule } from '@angular/core';
import { RouterModule, Routes} from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { LoginComponent } from './login/login.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  {
    path:'Products',
    loadChildren:() =>import('./productsroute/productsroute.module').then((x)=>x.ProductsrouteModule), canActivate: [AuthGuard]
  },
  { path: 'login', component: LoginComponent },
  // { path: 'Products', component: ProductListComponentComponent,canActivate: [AuthGuard] },
  // { path: 'Products/new', component: ProductAddComponent , canActivate: [AuthGuard]},
  // { path: 'Products/:productId/details', component: ProductDetailsComponent },
  // { path: 'Products/:productId/edit', component: EditProductComponent, canActivate: [AuthGuard] },
  { path: '**', component:PageNotFoundComponentComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

