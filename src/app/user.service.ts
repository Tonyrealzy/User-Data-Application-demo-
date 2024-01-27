import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User } from './user.model';

@Injectable({
  providedIn: 'root'
})

export class UserService {
   private readonly BASE_URL ='https://jsonplaceholder.typicode.com/users';


  constructor(private http: HttpClient) { }

  getAllUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.BASE_URL);
  }

  getUserById(userId: number): Observable<User[]> {
    const url = `${this.BASE_URL}/${userId}`;
    return this.http.get<User[]>(url);
  }

}
