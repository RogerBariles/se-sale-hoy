import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthenticationsComponent } from './components/authentications/authentications.component';
import { ConfigurationsComponent } from './components/configurations/configurations.component';

export const AppRoutes: Routes = [
  {
    path: 'configurations',
    component: ConfigurationsComponent,
    children: [
      {
        path: '',
        loadChildren: () => import('./components/configurations/components.module').then(m => m.ComponentsModule)
      }
    ]
  },
  {
    path: '',
    children: [
      {
        path: 'authentication',
        loadChildren: () => import('./components/authentications/authentications.module').then(m => m.AuthenticacionModule)
      }
    ]
  }

];
