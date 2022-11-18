import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthService } from '../service/auth.service';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-product-nav-bar',
  templateUrl: './product-nav-bar.component.html',
  styleUrls: ['./product-nav-bar.component.css']
})
export class ProductNavBarComponent implements OnInit {
  menuType: string = 'default';
  userName: string = "";

  constructor(private route: Router,
    private _userService: UserService,
    private authService: AuthService, 
    private toastr: ToastrService) { }

  ngOnInit(): void {
    this.userName = localStorage.getItem('name')!;
  }
  logOut() {
    localStorage.removeItem('token');
    this.toastr.success("logout sucessfully..")
    this.route.navigate(['login'])
  }

  isLogIn() {
    return this.authService.isLoggedIn();
  }


}
