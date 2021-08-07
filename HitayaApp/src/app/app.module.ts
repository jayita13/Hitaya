import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';



import { IgxFinancialChartModule } from "igniteui-angular-charts";

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { LoadingComponent } from './loading/loading.component';
import { NavBarComponent } from './Admin/nav-bar/nav-bar.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { CryptoDataComponent } from './crypto-data/crypto-data.component';
import { AdminHomeComponent } from './Admin/admin-home/admin-home.component';
import { UserDetailsComponent } from './Admin/user-details/user-details.component';
import { WalletComponent } from './wallet/wallet.component';
import { StockMarketComponent } from './stock-market/stock-market.component';
import { RetirementSavingsComponent } from './retirement-savings/retirement-savings.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CommonLayoutComponent,
    LoadingComponent,
    NavBarComponent,
    AdminLoginComponent,
    UserLayoutComponent,
    CryptoDataComponent,
    AdminHomeComponent,
    UserDetailsComponent,
    WalletComponent,
    StockMarketComponent,
    RetirementSavingsComponent,
    PageNotFoundComponentComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCaptchaModule,
    IgxFinancialChartModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
