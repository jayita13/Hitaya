import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';



import { IgxFinancialChartModule } from "igniteui-angular-charts";
import { QRCodeModule } from 'angularx-qrcode';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { LoadingComponent } from './loading/loading.component';
import { UserLayoutComponent } from './user-layout/user-layout.component';
import { CryptoDataComponent } from './crypto-data/crypto-data.component';
import { WalletComponent } from './wallet/wallet.component';
import { StockMarketComponent } from './stock-market/stock-market.component';
import { RetirementSavingsComponent } from './retirement-savings/retirement-savings.component';
import { PageNotFoundComponentComponent } from './page-not-found-component/page-not-found-component.component';
import { AboutComponent } from './about/about.component';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLayoutComponent } from './admin-layout/admin-layout.component';
import { EditUserDetailsComponent } from './edit-user-details/edit-user-details.component';
import { UserDashboardComponent } from './user-dashboard/user-dashboard.component';
import { EmployeeAdminComponent } from './employee-admin/employee-admin.component';
import { SavingsDashboardComponent } from './savings-dashboard/savings-dashboard.component';
import { HealthDataComponent } from './health-data/health-data.component';
import { HealthComponent } from './health/health.component';
import { DoctorsComponent } from './doctors/doctors.component';
import { CalenderComponent } from './calender/calender.component';
import { FooterComponent } from './footer/footer.component';


//import { CommonModule } from '@angular/common';
//import { FlatpickrModule } from 'angularx-flatpickr';
//import { CalendarModule, DateAdapter } from 'angular-calendar';
//import { adapterFactory } from 'angular-calendar/date-adapters/date-fns';
//import { NgbModalModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CommonLayoutComponent,
    LoadingComponent,
    UserLayoutComponent,
    CryptoDataComponent,
    WalletComponent,
    StockMarketComponent,
    RetirementSavingsComponent,
    PageNotFoundComponentComponent,
    AboutComponent,
    AdminDashboardComponent,
    AdminLayoutComponent,
    EditUserDetailsComponent,
    UserDashboardComponent,
    EmployeeAdminComponent,
    SavingsDashboardComponent,
    HealthDataComponent,
    HealthComponent,
    DoctorsComponent,
    CalenderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCaptchaModule,
    IgxFinancialChartModule,
    QRCodeModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
