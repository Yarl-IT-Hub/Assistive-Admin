import {throwError } from 'rxjs';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { environment } from "../../environments/environment";
import { catchError } from 'rxjs/operators';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  baseUrl = environment.  baseUrl;


  constructor(private http:HttpClient ,private router: Router){} 

  setToken(token: string): void {
    localStorage.setItem('token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('token');
  }

  isLoggedIn() {
    return !!localStorage.getItem('token')
  }

  logout() {
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }

  login(apiData: any){
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });


    return this.http.post(this.baseUrl + 'admin/login', apiData, {

      headers: httpHeaders,
      observe: 'response'
    })
    .pipe(catchError(this.handleError));
  }
  handleError(error: any){
    return throwError("These credentials do not match our records!!!"|| "Server Error!!!");
  }
}
