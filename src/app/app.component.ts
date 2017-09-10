import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { Dashboard } from '../pages/dashboard/index';
import { Customer } from '../pages/customer/index';
import { Loan } from '../pages/loan/index';
import { Login } from '../pages/login/index';
import * as Globals from './globals';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = Login;

  pages: Array<{title: string, component: any, icon: string}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title: 'ផ្ទាំងគ្រប់គ្រង', component: Dashboard , icon : Globals.icons.dashboard},
      { title: 'ការបង់ប្រាក់', component: Customer , icon : Globals.icons.payment},
      { title: 'អតិថិជន', component: Customer , icon : Globals.icons.customer},
      { title: 'ឥណទាន', component: Loan , icon : Globals.icons.loan},
      { title: 'ភ្នាក់ងារ', component: Customer , icon : Globals.icons.agent},
      { title: 'អ្នកប្រើប្រាស់', component: Customer , icon : Globals.icons.user},
      { title: 'ការកំណត់', component: Customer , icon : Globals.icons.setting},
      { title: 'ចាកចេញពីកម្មវិធី', component: Login , icon : Globals.icons.logout}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
