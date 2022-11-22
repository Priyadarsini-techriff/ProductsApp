import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login, user } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  base_api:string="http://www.dummyproducts.com/api";
  constructor(private http: HttpClient,private router: Router) {}
  setToken(token: string) {
    localStorage.setItem('token', token);
  }
  getToken(): string | null {
    return localStorage.getItem('token');
  }
  removeToken(){
    return localStorage.removeItem('token');
  }
  isLoggedIn():boolean {
    return this.getToken() !== null;
  }
  addUsername(username:string){
    localStorage.setItem('username',username);
  }
  addEmail(email: string) {
    localStorage.setItem('email', email);
  }
  addId(id: string) {
    localStorage.setItem('id', id);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  login(data: login) {
    return this.http.post<any>(this.base_api+"/token", data);
  }
 
  RegisterUseer(data:user){
    return this.http.post<any>(this.base_api+"/register", data);
  }

}
