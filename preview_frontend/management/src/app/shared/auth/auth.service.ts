import { HttpClient } from '@angular/common/http';
import { Inject, Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { LoginResponse } from './models/login-response';
import { RegisterResponse } from './models/register-response';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl: string;
  constructor(private http: HttpClient, @Inject('API_URL') apiUrl: string) { 
    this.apiUrl = apiUrl;
  }

  /**
   * Login to the service using a post request
   * @param username The username of the to-be logged in user
   * @param password The password supplied by the user
   */
  login(username: string, password: string): Observable<LoginResponse> {
    const content = {
      'email':username,
      'password':password
    }
    
    return this.http.post<LoginResponse>(`${this.apiUrl}/login`, content);
  }

  /**
   * Sends an email to reset the password of this user
   * @param email 
   * @returns 
   */
  resetPassword(email: string): Observable<any> {
    const content = {
      'email': email
    };

    return this.http.post<any>(`${this.apiUrl}/forgotpassword`, content);
  }

  updatePassword(newPassword: string, token: string, email: string): Observable<any> {
    const content = {
      'email': email,
      'password': newPassword,
      'token': token
    };
    return this.http.post<any>(`${this.apiUrl}/changepassword`, content);
  }

  /**
   * Register a user, retrieving a token on success.
   * @param username 
   * @param password 
   * @returns Loginresponse, including a authentication token.
   */
  register(username: string, password: string, name: string): Observable<LoginResponse> {
      const content = {
        'email': username,
        'password': password,
        'name': name
      }
      return this.http.post<LoginResponse>(`${this.apiUrl}/register`, content);
  }
}
