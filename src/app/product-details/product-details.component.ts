import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
 import { IProduct} from '../Product';
import { UserService } from '../service/user.service';


@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {

    product: IProduct | undefined;
  
  constructor(private routes: ActivatedRoute,private _userService: UserService) { }

  ngOnInit():void {
    this.routes.params.subscribe((params)=>{
      this.getProductDetailsById(params['productId']);
    })
  }
  getProductDetailsById(productId:number){
    this._userService.viewProduct(productId).subscribe((data:IProduct)=>{
      this.product=data;
    })
  }
  displayStyle = "none";
  openPopup() {
    this.displayStyle = "block";
  }

}
