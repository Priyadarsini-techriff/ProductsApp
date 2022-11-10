import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators,ReactiveFormsModule  } from '@angular/forms';
import { IProduct } from '../Product';
import { UserService } from '../service/user.service';
import {  RxReactiveFormsModule, RxwebValidators } from "@rxweb/reactive-form-validators";
import {ToastrService} from "ngx-toastr";

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit {
  formValue!: FormGroup; 
  btnSaveShow:boolean = true;
  // products: IProduct[] = [];
  products: IProduct = new IProduct;
  constructor(private formBuilder:FormBuilder, private _userService: UserService,private toastr :ToastrService) { }

  ngOnInit(): void {
  this.formValue = this.formBuilder.group({
    productName:['',Validators.required],
    description:['',Validators.required, Validators.minLength(6),Validators.maxLength(100)],
    releaseDate:['',Validators.required],
    price:['', RxwebValidators.numeric({allowDecimal:true,isFormat:true})],
    rating:['',Validators.required],
    imageUrl:['',Validators.required]
  })
 
  }
  get releaseDate(){
    return this.formValue.get('rating');
  }
  get rating(){
    return this.formValue.get('rating');
  }
  get productName(){
    return this.formValue.get('productName');
  }
  get price(){
    return this.formValue.get('price');
  }
  get description(){
    return this.formValue.get('description');
  }
  get imageUrl(){
    return this.formValue.get('imageUrl');
  }
  AddProduct(){
    this.products.productName = this.formValue.value.productName;
    this.products.description = this.formValue.value.description;
    this.products.releaseDate = this.formValue.value.releaseDate;
    this.products.price = this.formValue.value.price;
    this.products.rating = this.formValue.value.rating;
    this.products.imageUrl = this.formValue.value.imageUrl;

    this._userService.createProduct(this.products).subscribe({
      next: (v) => {
        console.log(v);
        this.formValue.reset();
      }
     })
  }

  showSuccess() {
    this.toastr.success("Data Sucessfully added...");
  }
  showError(){
    this.toastr.error('everything is broken', 'Major Error', {
      timeOut: 3000,
    });
  }
  
}
