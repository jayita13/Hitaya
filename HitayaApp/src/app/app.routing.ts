import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { RegistrationComponent } from './registration/registration.component';








const routes: Routes = [
  /*{ path: '', component: LandingPageComponent },*/
  { path: 'register', component: RegistrationComponent },
];

export const routing: ModuleWithProviders<T> = RouterModule.forRoot(routes);
/*export const routing: ModuleWithProviders<unknown> = RouterModule.forRoot(routes);*/

