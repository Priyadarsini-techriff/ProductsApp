import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IProduct } from '../Product';
import { UserService } from '../service/user.service';

import { ToastrService } from 'ngx-toastr';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-product-list-component',
  templateUrl: './product-list-component.component.html',
  styleUrls: ['./product-list-component.component.css']
})
export class ProductListComponentComponent implements OnInit {

  products: IProduct[] = [];
  pageNum: number = 1;
  display: boolean = true;
  submitted = false;
  totalProduct:any;

  constructor(private _userService: UserService, private toastr: ToastrService) { }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._userService.getProducts(this.pageNum).subscribe((data) => {
      this.products = data;
      this.totalProduct = data.length;
    });
  }

  onDeleteProduct(productId: number, productName:string) {
    if (confirm("Do you want to delete " + productName + "?")) 
    {
      this._userService.deleteProduct(productId).subscribe(
        (res) => {
          this.loadData();
          console.log("result: ", res)
        });
    }
  }

  onReactiveProduct(productId: number, productName:string) {
    if (confirm("Do you want to Activate this "+productName+"?" )) {
      this._userService.reactiveProduct(productId,productName).subscribe((result) => {
        this.loadData();
      });
    }
  }

  onDeactiveProduct(productId: number, productName:string) {
    if (confirm("Do you want to deactivate this " + productName + "?")) {
      this._userService.deactiveProduct(productId,  productName).subscribe(
        (result) => {
          console.log(result);
          this.loadData();
        });
    }
  }

  loadMore() {
    this.pageNum += 1;
    this._userService.getProducts(this.pageNum).subscribe((res) => {
      if (res.length != 0) {
        this.products = this.products.concat(res);
      } else {
        this.display = false;
      }
    });
  }

  deleteNotification() {
    this.toastr.error('Product sucessfully deleted');
  }

  deActivateNotification() {
    this.toastr.warning('Product has been deactivated');
  }
  activateNotification() {
    this.toastr.success('Product  has been activated');
  }
}
