import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing } from './app.routing';

import { AppComponent } from './app.component';
import { RegistrationComponent } from './registration/registration.component';
import { CommonLayoutComponent } from './common-layout/common-layout.component';
import { LoadingComponent } from './loading/loading.component';

@NgModule({
  declarations: [
    AppComponent,
    RegistrationComponent,
    CommonLayoutComponent,
    LoadingComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
