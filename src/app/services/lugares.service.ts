import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { Lugar } from '../models/lugares.model';

@Injectable({ providedIn: 'root' })

export class LugaresService {

    endpoint = "lugares";

    constructor(
        private http: HttpClient
    ) { }

    createLugar(newLugar: Lugar): Observable<Lugar[]> {
        return this.http.put<Lugar[]>(environment.apiUrl + this.endpoint, JSON.stringify(newLugar)).pipe(take(1));
    };

    getListLugares(): Observable<Lugar[]> {
        return this.http.get<Lugar[]>(environment.apiUrl + this.endpoint).pipe(take(1));
    };

    updatePlace(updatePlace: Lugar): Observable<Lugar[]> {
        return this.http.put<Lugar[]>(environment.apiUrl + this.endpoint + '/update', updatePlace).pipe(take(1));
    };
}