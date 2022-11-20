import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { login, user } from '../model/user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
 
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
  addRefreshToken(refToken:string){
    localStorage.setItem('refreshToken',refToken);
  }
  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
  login(data: login) {
    return this.http.post<any>("http://www.dummyproducts.com/api"+"/token", data);
  }
 
  RegisterUseer(data:user){
    return this.http.post<any>("http://www.dummyproducts.com/api"+"/register", data);
  }

}
