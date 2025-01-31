import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
user='walaaa'
  constructor(private http:HttpClient) { }
  // data reteurn observable in angular

  getProducts():Observable<any>{
    return this.http.get('https://dummyjson.com/products')
  }
  

  getDetailsProduct(id:any):Observable<any>{
    return this.http.get(`https://dummyjson.com/products/${id}`)
  }


  
}
