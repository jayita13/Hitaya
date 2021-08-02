import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { RegistrationComponent } from './registration/registration.component';
import { LoadingComponent } from './loading/loading.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { CryptoDataComponent } from './crypto-data/crypto-data.component';



import { AuthGuardService } from './hitaya-services/auth-guard/auth-guard.service';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';








const routes: Routes = [
  { path: '', component: LoadingComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'alogin', component: AdminLoginComponent },
  { path: 'ahome', component: AdminHomeComponent },
  { path: 'crypto', component: CryptoDataComponent, /* canActivate: [RegisterDoneService] */ },
];

/*export const routing: ModuleWithProviders = RouterModule.forRoot(routes);*/
export const routing: ModuleWithProviders<unknown> = RouterModule.forRoot(routes);

