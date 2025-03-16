import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  private apiUrl = 'http://localhost:5000/api'; // Replace with your backend URL

  constructor(private http: HttpClient) {}

  // Get user profile
  getProfile(): Observable<any> {
    return this.http.get(`${this.apiUrl}/profile`);
  }

  // Update user profile
  updateProfile(profileData: any): Observable<any> {
    return this.http.put(`${this.apiUrl}/profile`, profileData);
  }

  // Upload profile image
  uploadProfileImage(image: File): Observable<any> {
    const formData = new FormData();
    formData.append('profileImage', image);
    return this.http.post(`${this.apiUrl}/profile/upload`, formData);
  }
}
