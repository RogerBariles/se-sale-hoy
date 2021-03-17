import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BranchOffice } from '../models/branch_office.model';
import { Lugar } from '../models/lugares.model';

@Injectable({ providedIn: 'root' })

export class LugaresService {

    endpoint = "lugares";

    constructor(
        private http: HttpClient
    ) { }

    createLugar(newLugar: Lugar): Observable<Lugar[]> {
        const header = new HttpHeaders()
            .append("Content-Type", "application/json");
        return this.http.put<Lugar[]>(environment.apiUrl + this.endpoint, JSON.stringify(newLugar), { headers: header }).pipe(take(1));
    };

    getListLugares(): Observable<Lugar[]> {
        return this.http.get<Lugar[]>(environment.apiUrl + this.endpoint).pipe(take(1));
    };

    updatePlace(updatePlace: Lugar): Observable<Lugar[]> {
        return this.http.put<Lugar[]>(environment.apiUrl + this.endpoint + '/update', updatePlace).pipe(take(1));
    };

    getListBranchOfficeByIdPlace(idUser, idPlace): Observable<BranchOffice[]> {
        const PARAMS = new HttpParams()
            .append("idUser", idUser)
            .append("idPlace", idPlace);

        return this.http.get<BranchOffice[]>(environment.apiUrl + this.endpoint + '/byPlace', { params: PARAMS }).pipe(take(1));
    };

    addBranchOfficeByIdPlace(branchOffice, place) {

        delete branchOffice.lugarid;

        const JSON_BRANCHOFFICE = {
            ...branchOffice,
            lugar: place
        };
        return this.http.post(environment.apiUrl + this.endpoint + '/sucursal', JSON_BRANCHOFFICE).pipe(take(1));
    }
}