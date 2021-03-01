import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AbmLugaresComponent } from './abm-lugares/abm-lugares.component';

import { ComponentsRoutes } from './components.routing';
import { AbmAdminUsersComponent } from './abm-admin-users/abm-admin-users.component';
import { ConfigationUserComponent } from './abm-admin-users/configation-user/configation-user.component';
import { ConfigurationsComponent } from './configurations.component';
import { DashboardComponent } from '../static/dashboard/dashboard.component';
import { NavbarComponent } from '../static/navbar/navbar.component';
import { AppModule } from 'src/app/app.module';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { StaticModule } from '../static/static.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        StaticModule,
        RouterModule.forChild(ComponentsRoutes),
        RouterModule
    ],
    exports: [],
    declarations: [
        AbmLugaresComponent,
        AbmAdminUsersComponent,
        ConfigationUserComponent,
        ConfigurationsComponent
    ],
    providers: [],
})
export class ComponentsModule { }
