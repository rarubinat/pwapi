import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({providedIn: 'root',})

export class UsersService {
  constructor(private http: HttpClient) {}

  getAllusers(): Observable<Object> {
    return this.http.get<Object>('https://myfakeapi.com/api/users/');
  }

  getUserById(id: string): Observable<Object> {
    return this.http.get<Object>('https://myfakeapi.com/api/users/' + id);
  }
}
