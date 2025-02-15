import { NgStyle } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
user='walaaa'

private apiUrl = 'http://localhost:3000/api'; 

  constructor(private http:HttpClient) { }
  
    // Get furniture type

    getFurnitureTypes(): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/furniture_types`);
    }
  
    // Get parts of a specific furniture type
    getParts(furnitureTypeId: number): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/furniture_types/${furnitureTypeId}/parts`);
    }
  
      // Get product of a specific furniture part
  
    getProduct(partId: any): Observable<any[]> {
      return this.http.get<any[]>(`${this.apiUrl}/parts/${partId}/products`);
    }
      getProductDetails(productId: any): Observable<any[]> {
      if (!productId) {
        return throwError('Invalid productId');
      }
      return this.http.get<any>(`${this.apiUrl}/products/${productId}`);    }



getAllProducts():Observable<any> {
  return this.http.get(`${this.apiUrl}/products`);
}

  

   
}
