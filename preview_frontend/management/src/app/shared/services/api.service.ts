import { DAOEvent } from './../models/event';
import { environment } from '../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Response } from '../models/api/response';


@Injectable({
  providedIn: 'root'
})
export class ApiService {


  constructor(private http : HttpClient) { }

  private apiUrl: String = environment.apiUrl;

  createFlexworker(flexworkerData: any) : Observable<Response<string>> {
    return this.http.post<Response<string>>(`${this.apiUrl}/flexworker`, flexworkerData);
  }
  updateFlexworker(flexworkerData: any) : Observable<Response<string>> {
    return this.http.patch<Response<string>>(`${this.apiUrl}/flexworker`, flexworkerData);
  }


  createEvent(event : DAOEvent) : Observable<any> {
    return this.http.post<Response<string>>(`${this.apiUrl}/event`, event);
  }
  updateEvent(event : DAOEvent) : Observable<any> {
    return this.http.patch<Response<string>>(`${this.apiUrl}/event/`, event);
  }
  getEvent(id) : Observable<any> {
    return this.http.get<any>(this.apiUrl + "/event/" + id);
  }
  getEventOverviewDetails() : Observable<any> {
    return this.http.get<any>(this.apiUrl + "/event-details");
  }
}
