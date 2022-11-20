import { Injectable} from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { map, Observable} from 'rxjs';
import { IProduct } from '../model/Product';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable({
  providedIn: 'root'
})

@NgModule({
  declarations: [],
  imports: [
    CommonModule
  ]
})

export class UserService {
  api: string = "http://www.dummyproducts.com/api/Products/";
  constructor(private http: HttpClient,private auth: AuthService) { }
  public myToken=this.auth.getToken();
  public httpHeaders=new HttpHeaders({
    'content-Type':'application/json',
    'Authorization':`Bearer ${this.myToken}`
  });
  //get allProducts
  getProducts(pageNumber: number): Observable<IProduct[]> {
   
    // return this.http.get<IProduct[]>("http://www.dummyproducts.com/api/Products?rowsPerPage=10&pageNumber="+pageNumber);
    return this.http.get<IProduct[]>(this.api+"?rowsPerPage=10&pageNumber="+pageNumber,{headers:this.httpHeaders});
  }

  //delete
  deleteProduct(productId: number): Observable<IProduct[]> {
    return this.http.delete<IProduct[]>(this.api + productId,{headers:this.httpHeaders});
  }
  reactiveProduct(productId: number,data:any): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(this.api + productId + "/reactivate", {});
  }
  deactiveProduct(productId: number,data:any): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(this.api + productId + "/deactivate", {});
  }
  //ProductDetails 
  viewProduct(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.api + productId);
  }

  //Add Product
  createProduct(data: IProduct) {
    return this.http.post<IProduct>(this.api, data,{headers:this.httpHeaders}).pipe(map((res: any) => {
      return res;
    }))
  }

  //Get One
  getProductById(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.api + productId);
  }

  updateProduct(productId: number, product: any) {
    return this.http.put(this.api + productId, product,{headers:this.httpHeaders});
  }
 

}