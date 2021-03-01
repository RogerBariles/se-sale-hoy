import { HttpErrorResponse, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { tap } from 'rxjs/operators';

@Injectable()

export class AuthHttpInterceptor implements HttpInterceptor {

    constructor(
        private router: Router
    ) { }

    intercept(req: HttpRequest<any>, next: HttpHandler) {

        const token = localStorage.getItem("token");

        if (token) {
            req = req.clone({ headers: req.headers.set('Authorization', 'Bearer ' + token) })
        }

        return next.handle(req).pipe(
            tap(() => {
            }, (err: any) => {
                // error
                if (err instanceof HttpErrorResponse) {
                    let error = err.error;

                    if (typeof err.error === 'string') {
                        error = JSON.parse(err.error);
                    }
                    if (err.status === 0 || err.status === 401) {
                        // accion cuando el interceptor falla
                        this.router.navigate(['authentication']);
                    }

                }
            })
        );
    }
}