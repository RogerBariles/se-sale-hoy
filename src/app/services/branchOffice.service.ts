import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { take } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { BranchOffice } from '../models/branch_office.model';

@Injectable({ providedIn: 'root' })
export class BranchOfficeService {

    endpoint: string = 'sucursales';

    constructor(
        private http: HttpClient
    ) { }

    getListBranchOffice(): Observable<BranchOffice[]> {
        return this.http.get<BranchOffice[]>(environment.apiUrl + this.endpoint).pipe(take(1));
    };
}