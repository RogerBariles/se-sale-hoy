import { Routes } from '@angular/router';
import { AbmAdminUsersComponent } from './abm-admin-users/abm-admin-users.component';
import { ConfigationUserComponent } from './abm-admin-users/configation-user/configation-user.component';
import { AbmLugaresComponent } from './abm-lugares/abm-lugares.component';
import { ConfigurationsComponent } from './configurations.component';
import { ConfigurationsSucursalComponent } from './mis-sucursales/configurations-sucursal/configurations-sucursal.component';
import { MisSucursalesComponent } from './mis-sucursales/mis-sucursales.component';



export const ComponentsRoutes: Routes = [
    {
        path: 'abmLugares',
        component: AbmLugaresComponent,
        // children: [
        //     {
        //         path: 'sucursales/:idLugar',
        //         component: AbmSucursalesComponent
        //     }
        // ]
    },
    {
        path: 'usuarios',
        children: [
            {
                path: '',
                component: AbmAdminUsersComponent,
            },
            {
                path: 'local/:idUser',
                component: ConfigationUserComponent
            }
        ]
    },
    {
        path: 'sucursales',
        children: [
            {
                path: '',
                component: MisSucursalesComponent
            },
            {
                path: ':idSucursal',
                component: ConfigurationsSucursalComponent
            }
        ]
    }
]