import { BrowserModule } from '@angular/platform-browser';
import { HttpModule } from '@angular/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { Dashboard } from '../pages/dashboard/index';
import { Customer, CustomerFromModal } from '../pages/customer/index';
import { Loan, LoanFromModal } from '../pages/loan/index';
import { Login } from '../pages/login/index';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { FilterPipe, SortByPipe } from './pipes'

@NgModule({
  declarations: [
    MyApp,
    Dashboard,
    Customer, CustomerFromModal,
    Loan, LoanFromModal,
    Login,
    FilterPipe, SortByPipe
  ],
  imports: [
    HttpModule,
    BrowserModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    Dashboard,
    Customer, CustomerFromModal,
    Loan, LoanFromModal,
    Login
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
