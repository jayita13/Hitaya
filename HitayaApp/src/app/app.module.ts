import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxCaptchaModule } from 'ngx-captcha';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { LoadingComponent } from './loading/loading.component';
import { NavBarComponent } from './Admin/nav-bar/nav-bar.component';
import { AdminLoginComponent } from './Admin/admin-login/admin-login.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CommonLayoutComponent,
    LoadingComponent,
    NavBarComponent,
    AdminLoginComponent
  ],
  imports: [
    BrowserModule,
    routing,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgxCaptchaModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
