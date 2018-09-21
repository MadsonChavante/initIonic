import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { InAppBrowser } from '@ionic-native/in-app-browser';
import { AndroidPermissions} from '@ionic-native/android-permissions';

import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { SolicitacaoPage } from '../pages/solicitacao/solicitacao';
import { ExtratoPage } from '../pages/extrato/extrato';
import { ModalPage } from '../pages/modal/modal';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { AdesaoPage } from '../pages/adesao/adesao';

@NgModule({
  declarations: [
    MyApp,
    SolicitacaoPage,
    ExtratoPage,
    HomePage,
    TabsPage,
    LoginPage,
    ModalPage,
    AdesaoPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    SolicitacaoPage,
    ExtratoPage,
    HomePage,
    TabsPage,
    ModalPage,
    LoginPage,
    AdesaoPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    AndroidPermissions,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
