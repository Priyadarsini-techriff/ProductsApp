import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { IProduct } from '../Product';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

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
  private _url: string = "http://www.dummyproducts.com/api/Products?rowsPerPage=10&pageNumber=1";
  api: string = "http://www.dummyproducts.com/api/Products/";
  constructor(private http: HttpClient) { }

  //get allProducts
  getProducts(pageNumber: number): Observable<IProduct[]> {
    return this.http.get<IProduct[]>("http://www.dummyproducts.com/api/Products?rowsPerPage=10&pageNumber="+pageNumber);
  }

  //delete
  deleteProduct(productId: number): Observable<IProduct[]> {
    return this.http.delete<IProduct[]>(this.api + productId);
  }
  reactiveProduct(productId: number, data:any): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(this.api + productId + "/reactivate", {});
  }
  deactiveProduct(productId: number, data:any): Observable<IProduct[]> {
    return this.http.post<IProduct[]>(this.api + productId + "/deactivate", {});
  }
  //ProductDetails 
  viewProduct(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.api + productId);
  }

  //Add Product
  createProduct(data: IProduct) {
    return this.http.post<IProduct>(this.api, data).pipe(map((res: any) => {
      return res;
    }))
  }

  //Get One
  getProductById(productId: number): Observable<IProduct> {
    return this.http.get<IProduct>(this.api + productId);
  }

  updateProduct(productId: number, product: any) {
    return this.http.put(this.api + productId, product);
  }

}

