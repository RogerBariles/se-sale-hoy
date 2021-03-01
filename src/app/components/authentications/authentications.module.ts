import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AuthenticationRoutes } from './authentication.routing';

import { AuthenticationsComponent } from './authentications.component';

@NgModule({
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        RouterModule.forChild(AuthenticationRoutes),
    ],
    exports: [],
    declarations: [
        AuthenticationsComponent
    ],
    providers: [],
})
export class AuthenticacionModule { }
