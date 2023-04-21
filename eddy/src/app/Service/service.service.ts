import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from '../model/User';

@Injectable({
  providedIn: 'root'
})
export class ServiceService {

  Url='https://random-data-api.com/api/users/random_user?size=10';

  constructor(private http:HttpClient) { }


  getStuden(){
    return this.http.get<User[]>(this.Url);
  }
}
