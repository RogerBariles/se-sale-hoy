import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FooterComponent } from './footer/footer.component';

import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
    imports: [
        CommonModule,
        RouterModule
    ],
    exports: [
        NavbarComponent,
        DashboardComponent,
        FooterComponent,
    ],
    declarations: [
        NavbarComponent,
        DashboardComponent,
        FooterComponent,
    ],
    providers: [],
})
export class StaticModule { }
