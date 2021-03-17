import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { ComponentsRoutes } from './components.routing';

import { CommonModule } from '@angular/common';
import { StaticModule } from '../static/static.module';
import { ConfigurationsComponent } from './configurations.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AbmLugaresComponent } from './abm-lugares/abm-lugares.component';
import { AbmSucursalesComponent } from './abm-lugares/abm-sucursales/abm-sucursales.component';
import { ConfigationUserComponent } from './abm-admin-users/configation-user/configation-user.component';
import { AbmAdminUsersComponent } from './abm-admin-users/abm-admin-users.component';
import { MisSucursalesComponent } from './mis-sucursales/mis-sucursales.component';
import { ConfigurationsSucursalComponent } from './mis-sucursales/configurations-sucursal/configurations-sucursal.component';

@NgModule({
    imports: [
        CommonModule,
        ReactiveFormsModule,
        FormsModule,
        StaticModule,
        RouterModule.forChild(ComponentsRoutes),
    ],
    exports: [],
    declarations: [
        ConfigurationsComponent,
        AbmLugaresComponent,
        AbmSucursalesComponent,
        AbmAdminUsersComponent,
        ConfigationUserComponent,
        MisSucursalesComponent,
        ConfigurationsSucursalComponent
    ],
    providers: [],
})
export class ComponentsModule { }
