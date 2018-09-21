import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { TabsPage } from '../pages/tabs/tabs';
import { HomePage } from '../pages/home/home';
import { SolicitacaoPage } from '../pages/solicitacao/solicitacao';
import { ExtratoPage } from '../pages/extrato/extrato';
import { LoginPage } from '../pages/login/login';

export interface PageInterface {
  title: string;
  name: string;
  component: any;
  icon: string;
  logsOut?: boolean;
  index?: number;
  tabName?: string;
  tabComponent?: any;
}

@Component({
  templateUrl: 'app.html'
})
export class MyApp {

  @ViewChild(Nav) nav: Nav;


  appPages: PageInterface[] = [
    { title: 'Home', name: 'TabsPage', component: TabsPage, tabComponent: HomePage, index: 0, icon: 'home' },
    { title: 'Solicitação de Crédito', name: 'TabsPage', component: TabsPage, tabComponent: SolicitacaoPage, index: 1, icon: 'md-card' },
    { title: 'Extrato', name: 'TabsPage', component: TabsPage, tabComponent: ExtratoPage, index: 2, icon: 'md-calculator' }
  ];

  rootPage:any = LoginPage;

  constructor(
    platform: Platform,
    statusBar: StatusBar,
    splashScreen: SplashScreen,
    ) {

    platform.ready().then(() => {
      statusBar.styleBlackOpaque();
      statusBar.backgroundColorByHexString('#244463');
      splashScreen.hide();
    });
  }


  openPage(page: PageInterface) {

    let params = {};
    if (page.index) {
      params = { tabIndex: page.index };
    }
    if (this.nav.getActiveChildNavs().length && page.index != undefined) {
      this.nav.getActiveChildNavs()[0].select(page.index);
    } else {
      this.nav.setRoot(page.name, params).catch((err: any) => {
        console.log(`Didn't set nav root: ${err}`);
      });
    }
  }

  isActive(page: PageInterface) {
    let childNav = this.nav.getActiveChildNavs()[0];

    if (childNav) {
      if (childNav.getSelected() && childNav.getSelected().root === page.tabComponent) {
        return 'primary';
      }
      return 'icon';
    }

    if (this.nav.getActive() && this.nav.getActive().name === page.name) {
      return 'primary';
    }
    return 'icon';
  }
}
