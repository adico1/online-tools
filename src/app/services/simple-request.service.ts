import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class SimpleRequestService {

  constructor(private http: HttpClient) { }

  apiCallPromise(api_url: string) {
    return this.http.get(api_url);
  }
}
