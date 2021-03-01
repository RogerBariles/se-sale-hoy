import { Routes } from '@angular/router';
import { AuthenticationsComponent } from './authentications.component';

export const AuthenticationRoutes: Routes = [
    {
        path: '',
        children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            {
                path: '',
                component: AuthenticationsComponent
            }
        ]
    }
]