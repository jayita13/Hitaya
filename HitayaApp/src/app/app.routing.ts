import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { RegistrationComponent } from './registration/registration.component';
import { LoadingComponent } from './loading/loading.component';








const routes: Routes = [
  { path: '', component: LoadingComponent },
  { path: 'register', component: RegistrationComponent },
];

/*export const routing: ModuleWithProviders = RouterModule.forRoot(routes);*/
export const routing: ModuleWithProviders<unknown> = RouterModule.forRoot(routes);

