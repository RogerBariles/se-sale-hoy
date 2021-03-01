import { Routes } from '@angular/router';
import { AbmAdminUsersComponent } from './abm-admin-users/abm-admin-users.component';
import { AbmLugaresComponent } from './abm-lugares/abm-lugares.component';

export const ComponentsRoutes: Routes = [
    {
        path: 'abmLugares',
        component: AbmLugaresComponent
    },
    {
        path: 'usuarios',
        component: AbmAdminUsersComponent
    }
]