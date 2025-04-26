import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {


  constructor(private http:HttpClient) { }
  login(obj:any):Observable<any>{
    return this.http.post
    ('https://full.faedg.com/api/client/customer_login',obj)

    // ('https://apisinop.cra.ac.th/api/api/Auth/RegisterThenLogin',obj)
  }

 

}
