import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { user } from '../model/user';
import { AuthService } from '../service/auth.service';
import { ToastrService } from 'ngx-toastr';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  userLogin!: FormGroup;
  userSignUp!: FormGroup;
  registraionInputs: user[] = [];
  showLogin: boolean = true
  authError: string = "";
  public globalResponse: any;
  constructor(private authService: AuthService, private router: Router, private formBuilder: FormBuilder,private toastr:ToastrService) { }

  ngOnInit(): void {
    this.userLogin = this.formBuilder.group({
      emailAddress: new FormControl('', [Validators.required, Validators.email]),
      password: ['', Validators.required],
    });
    this.userSignUp = this.formBuilder.group({
      firstName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      lastName: new FormControl('',[Validators.required,Validators.pattern('[a-zA-Z ]*')]),
      email: new FormControl('',[Validators.required, Validators.email]),
      password: new FormControl('',[Validators.required]),
      confirmPassword: new FormControl('',[Validators.required])
    })
    if (this.authService.isLoggedIn()) {
      this.router.navigate(['Products']);
    }
  }
  //validation
  get emailAddress() {
    return this.userLogin.get('emailAddress');
  }
  get password() {
    return this.userLogin.get('password');
  }
  get email() {
    return this.userSignUp.get('email');
  }
  get firstName() {
    return this.userSignUp.get('firstName');
  }
  get confirmPassword() {
    return this.userSignUp.get('confirmPassword');
  }
  get Password() {
    return this.userSignUp.get('password');
  }
  get lastName() {
    return this.userSignUp.get('lastName');
  }
  login() {
    this.authService.removeToken();
    if (this.userLogin.valid) {
      // console.log(this.userLogin.value);
      this.authService.login(this.userLogin.value).subscribe({
        next: (res) => {
          this.globalResponse = res;
          this.toastr.success("login sucessfully..");
          this.router.navigate(['Products']);
          this.authService.setToken(res.token);
          this.authService.addUsername(res.firstName);
         
        },
        error: () => {
          this.toastr.error('InCorrect UserId Or Password. Register to continue....');
          this.router.navigate(['login']);
        }

      })
    }
  }

  signUp() {
    if (this.userSignUp.valid) {
      this.authService.RegisterUseer(this.userSignUp.value).subscribe({
        next: (res) => {
          console.log(res);
          this.globalResponse = res;
          this.toastr.success("Register sucessfully..");
          this.userSignUp.reset();
          this.router.navigate(['login']);
        },
        error: (err) => {
          alert(err.message);
        }
    });
    }
  }
  openSignUp() {
    this.showLogin = false;
  }
  openLogin() {
    this.showLogin = true;
  }





}
