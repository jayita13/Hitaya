import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { RegistrationComponent } from './registration/registration.component';
import { LoadingComponent } from './loading/loading.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { CryptoDataComponent } from './crypto-data/crypto-data.component';
import { WalletComponent } from './wallet/wallet.component';
import { StockMarketComponent } from './stock-market/stock-market.component';
import { RetirementSavingsComponent } from './retirement-savings/retirement-savings.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AboutComponent } from './about/about.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EmployeeAdminComponent } from './employee-admin/employee-admin.component';



import { AuthGuardService } from './hitaya-services/auth-guard/auth-guard.service';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';








const routes: Routes = [
  { path: '', component: LoadingComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'alogin', component: AdminLoginComponent },
  { path: 'ahome', component: AdminHomeComponent },
  { path: 'wallet', component: WalletComponent },
  { path: 'crypto', component: CryptoDataComponent, /* canActivate: [RegisterDoneService] */ },
  { path: 'stocks', component: StockMarketComponent, /* canActivate: [RegisterDoneService] */ },
  { path: 'analysis', component: RetirementSavingsComponent, /* canActivate: [RegisterDoneService] */ },
  { path: 'edit-user', component: EditUserDetailsComponent, /* canActivate: [RegisterDoneService] */ },
  { path: 'user-dashboard', component: UserDashboardComponent, /* canActivate: [RegisterDoneService] */ },
  { path: 'about', component: AboutComponent, /* canActivate: [RegisterDoneService] */ },
  { path: 'admin-dashboard', component: AdminDashboardComponent, /* canActivate: [RegisterDoneService] */ },
  { path: 'employee-admin-dashboard', component: EmployeeAdminComponent, /* canActivate: [RegisterDoneService] */ },
  { path: '**', component: PageNotFoundComponentComponent }
];

/*export const routing: ModuleWithProviders = RouterModule.forRoot(routes);*/
export const routing: ModuleWithProviders<unknown> = RouterModule.forRoot(routes);

