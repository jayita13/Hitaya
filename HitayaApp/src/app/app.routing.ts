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
  { path: '**', component: PageNotFoundComponentComponent }
];

/*export const routing: ModuleWithProviders = RouterModule.forRoot(routes);*/
export const routing: ModuleWithProviders<unknown> = RouterModule.forRoot(routes);

