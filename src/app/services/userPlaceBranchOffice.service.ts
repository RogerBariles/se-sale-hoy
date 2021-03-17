import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { UserPlaceBranchOffice } from '../models/user_place_branchOffice.model';

@Injectable({ providedIn: 'root' })
export class UserPlaceBranchOfficeService {

    endpoint: string = 'placeBranchOffice';

    constructor(
        private http: HttpClient
    ) { }

    getListPlaceBranchOfficeByIdUser(idUser): Observable<UserPlaceBranchOffice[]> {
        const PARAMS_ = new HttpParams()
            .append("idUser", idUser);

        return this.http.get<UserPlaceBranchOffice[]>(environment.apiUrl + this.endpoint, { params: PARAMS_ }).pipe(take(1));
    };

    savePlaceBranchOfficeByUser(json): Observable<UserPlaceBranchOffice> {
        return this.http.put<UserPlaceBranchOffice>(environment.apiUrl + this.endpoint, json).pipe(take(1));
    };
}