import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable} from '@angular/core';
import { environment } from 'src/environments/environment';
import {Type } from '../modules/admin/Components/questiontype/questiontype.component';

@Injectable({
  providedIn: 'root'
})
export class TypeService {
  baseUrl = environment.baseUrl;
  
  constructor(private http: HttpClient) { }
  
  addData(apiData: any){
  
    const httpHeaders = new HttpHeaders();
    httpHeaders.append('Content-Type', 'multipart/form-data');
    httpHeaders.append('Accept', 'application/json');

    return this.http.post(this.  baseUrl + 'types',apiData, {

      headers: httpHeaders,
      observe: 'response'
    });
  }
  get() {
    const httpHeaders = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.get<Type[]>(this.baseUrl + 'types', {
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
