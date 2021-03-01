import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http'
import { Observable } from 'rxjs';
import { UserLogin } from '../models/user_login.model';
import { environment } from 'src/environments/environment';
import { take } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthenticationService {

    endpoint = 'authentication';

    constructor(
        private http: HttpClient
    ) { }

    login(user): Observable<UserLogin> {
        const jsonUser = {
            nameUser: user.get('nameuser').value,
            password: user.get('password').value
        }

        const header = new HttpHeaders()
            .set('Content-Type', 'application/json');

        return this.http.post<UserLogin>(environment.apiUrl + this.endpoint + '/login', jsonUser, { headers: header }).pipe(take(1));
    }

}