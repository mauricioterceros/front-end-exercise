import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {

  public url: string = 'https://random-data-api.com/api/users/random_user?size=10';

  constructor(
    private http: HttpClient
  ) {
  }

  getHeaders() {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });
    return {headers: headers};
  }

  getRandomUsers(): Observable<any> {
    return this.http.get(this.url, this.getHeaders());
  }

}
