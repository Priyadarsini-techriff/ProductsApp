import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css']
})
export class EditProductComponent implements OnInit {
  productMessage: undefined | string;
  formValue!: FormGroup; 
  constructor(private routes: ActivatedRoute, private _userService: UserService,private toastr :ToastrService) { }

  editProduct = new FormGroup({
    productName: new FormControl(''),
    description: new FormControl(''),
    releaseDate: new FormControl(''),
    price: new FormControl(''),
    rating: new FormControl(''),
    imageUrl: new FormControl(''),
  });

  ngOnInit(): void {
    const id = this.routes.snapshot.params['productId'];
    console.log(id);
    this._userService.getProductById(id).subscribe((result: any) => {
      console.log(result);
      this.editProduct = new FormGroup({
        productName: new FormControl(result['productName']),
        description: new FormControl(result['description']),
        releaseDate: new FormControl(result['releaseDate']),
        price: new FormControl(result['price']),
        rating: new FormControl(result['rating']),
        imageUrl: new FormControl(result['imageUrl']),
      });
    })
  }


  UpdateProduct() {
    console.log(this.editProduct.value);
    this._userService.updateProduct(this.routes.snapshot.params['productId'], this.editProduct.value).subscribe((res:any) => {
     console.log(res);
     this.editProduct.reset();
    });
    
  }
  showSuccess() {
    this.toastr.success("Data Sucessfully Updated...");
  }

}
