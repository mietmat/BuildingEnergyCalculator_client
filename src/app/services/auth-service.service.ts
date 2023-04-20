import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Route, Router } from '@angular/router';
import { TokenApiModel } from '../models/token-api.model';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private baseUrl : string = "https://localhost:5001/api/account/"
  private userPayload:any;
  constructor(private http: HttpClient, private router: Router) { 
    this.userPayload = this.decodedToken();
  }

  signUp(userObj:any){
    return this.http.post<any>(`${this.baseUrl}register`,userObj)
  }

  signIn(loginObj:any){
    return this.http.post<any>(`${this.baseUrl}login`,loginObj)
  }

  signOut(){
    localStorage.clear();
    this.router.navigate(['building-energy/login'])
  }

  storeToken(tokenValue: string){
    localStorage.setItem('token', tokenValue)
  }

  storeRefreshToken(tokenValue: string){
    localStorage.setItem('refreshToken', tokenValue)
  }

  getToken(){
    return localStorage.getItem('token')
  }
  getRefreshToken(){
    return localStorage.getItem('refreshToken')
  }

  isLoggedIn(): boolean{
    return !!localStorage.getItem('token')
  }

  decodedToken(){
    const jwtHelper = new JwtHelperService();
    const token = this.getToken()!;
    console.log(jwtHelper.decodeToken(token));
    return jwtHelper.decodeToken(token);
  }

  getFullNameFromToken(){
    if(this.userPayload)
      return this.userPayload.name;
  }

  getRoleFromToken(){
    if(this.userPayload)
      return this.userPayload.role;
  }

  renewToken(tokenApi: TokenApiModel){
      return this.http.post<any>(`${this.baseUrl}refresh`, tokenApi)
  }

}
