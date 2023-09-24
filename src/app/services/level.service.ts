import { Injectable } from '@angular/core';
import { Level } from './../modules/admin/Components/level/level.component';
import { Router } from '@angular/router';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { environment } from "../../environments/environment";
import { Observable, of, from, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class LevelService {
  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }

  Addlevel(data: any): Observable<any> {
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'multipart/form-data');
    httpHeaders.append('Accept', 'application/json');

    return this.http.post<any>(this.baseUrl + 'types', data,
      {
        headers: httpHeaders,
        observe: 'response',
      });
  }

  get() {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get<Level[]>(this.baseUrl + 'types', {
      headers: httpHeaders,
      observe: 'response'
    });

  }


  delete(id: number) {

    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.delete(this.baseUrl + 'types/' + id, {

      headers: httpHeaders,
      observe: 'response'
    });
  }

}

