import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { User } from '../models/user.model';

@Injectable({ providedIn: 'root' })
export class usersService {

    endpoint = 'users';

    constructor(
        private http: HttpClient
    ) { }

    getUsersList(): Observable<User[]> {
        return this.http.get<User[]>(environment.apiUrl + this.endpoint + '/list').pipe(take(1));
    }

    updateUsers(userUpdate): Observable<User[]> {
        return this.http.put<User[]>(environment.apiUrl + this.endpoint + '/update', userUpdate).pipe(take(1));
    }

}