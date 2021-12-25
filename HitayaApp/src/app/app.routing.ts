import { RouterModule, Routes } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';

import { RegistrationComponent } from './registration/registration.component';
import { LoadingComponent } from './loading/loading.component';
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
import { SavingsDashboardComponent } from './savings-dashboard/savings-dashboard.component';

import { HealthDataComponent } from './health-data/health-data.component';
import { HealthComponent } from './health/health.component';
import { DoctorsComponent } from './doctors/doctors.component';

import { LoanRequestComponent } from './loan-request/loan-request.component';
import { LoanNotificationComponent } from './loan-notification/loan-notification.component';
import { LoanRequestHistoryComponent } from './loan-request-history/loan-request-history.component';


import { AuthGuardService } from './hitaya-services/auth-guard/auth-guard.service';









const routes: Routes = [
  { path: '', component: LoadingComponent },
  { path: 'register', component: RegistrationComponent },
  { path: 'wallet', component: WalletComponent, canActivate: [AuthGuardService] },
  { path: 'health-data', component: HealthDataComponent/*, canActivate: [AuthGuardService]*/ },
  { path: 'health', component: HealthComponent/*, canActivate: [AuthGuardService]*/ },
  { path: 'doctors', component: DoctorsComponent/*, canActivate: [AuthGuardService]*/ },
  { path: 'crypto', component: CryptoDataComponent, canActivate: [AuthGuardService]  },
  { path: 'stocks', component: StockMarketComponent, canActivate: [AuthGuardService]  },
  { path: 'analysis', component: RetirementSavingsComponent, canActivate: [AuthGuardService]  },
  { path: 'edit-user', component: EditUserDetailsComponent, canActivate: [AuthGuardService]  },
  { path: 'user-dashboard', component: UserDashboardComponent, canActivate: [AuthGuardService]  },
  { path: 'savings-dashboard', component: SavingsDashboardComponent, canActivate: [AuthGuardService]  },
  { path: 'about', component: AboutComponent/*, canActivate: [AuthGuardService]*/ },
  { path: 'loan_request', component: LoanRequestComponent/*, canActivate: [AuthGuardService]*/ },
  { path: 'loan_notification', component: LoanNotificationComponent/*, canActivate: [AuthGuardService]*/ },
  { path: 'loan_request_history', component: LoanRequestHistoryComponent/*, canActivate: [AuthGuardService]*/ },
  { path: 'admin-dashboard', component: AdminDashboardComponent/*, canActivate: [AuthGuardService]*/  },
  { path: 'employee-admin-dashboard', component: EmployeeAdminComponent/*, canActivate: [AuthGuardService] */ },
  { path: '**', component: PageNotFoundComponentComponent }
];

/*export const routing: ModuleWithProviders = RouterModule.forRoot(routes);*/
export const routing: ModuleWithProviders<unknown> = RouterModule.forRoot(routes);

