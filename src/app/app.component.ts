import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = HomePage;

  habitationNav: boolean = false;
  regularizationNav: boolean = false;
  entityNav: boolean = false;
  portalNav: boolean = false;
  cadastreNav: boolean = false;
  serviceNav: boolean = false;

  constructor(public platform: Platform,
   
    public statusBar: StatusBar,
    public splashScreen: SplashScreen) {
    this.initializeApp();

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


  // Controles Sidebar

  openHabitationNav(reset = false) {
    this.resetNav('habitationNav', this.habitationNav);
    this.habitationNav = (reset == true) ? false : this.habitationNav
    this.habitationNav = (this.habitationNav == true) ? false : true
  }

  openRegularizationNav(reset = false) {
    this.resetNav('regularizationNav', this.regularizationNav);
    this.regularizationNav = (reset == true) ? false : this.regularizationNav
    this.regularizationNav = (this.regularizationNav == true) ? false : true
  }

  openEntityNav(reset = false) {
    this.resetNav('entityNav', this.entityNav);
    this.entityNav = (reset == true) ? false : this.entityNav
    this.entityNav = (this.entityNav == true) ? false : true
  }

  openPortalNav(reset = false) {
    this.resetNav('portalNav', this.portalNav);
    this.portalNav = (reset == true) ? false : this.portalNav
    this.portalNav = (this.portalNav == true) ? false : true
  }

  openCadastreNav(reset = false) {
    this.resetNav('cadastreNav', this.cadastreNav);
    this.cadastreNav = (reset == true) ? false : this.cadastreNav
    this.cadastreNav = (this.cadastreNav == true) ? false : true
  }

  openServiceNav(reset = false) {
    this.resetNav('serviceNav', this.serviceNav);
    this.serviceNav = (reset == true) ? false : this.serviceNav
    this.serviceNav = (this.serviceNav == true) ? false : true
  }

  resetNav(exemption_nav, value) {
    this.habitationNav = false
    this.regularizationNav = false
    this.habitationNav = false
    this.regularizationNav = false
    this.entityNav = false
    this.portalNav = false
    this.cadastreNav = false

    this[exemption_nav] = value
  }
}
