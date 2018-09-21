import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, MenuController } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
import { AdesaoPage } from '../adesao/adesao';
import { AndroidPermissions } from '@ionic-native/android-permissions';

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {

  tabBarElement: any;
  splash = true;

  constructor(
      public navCtrl: NavController,
      public navParams: NavParams,
      public menu: MenuController,
      public androidPermissions: AndroidPermissions
    ) {
    this.tabBarElement = document.querySelector('.tabbar');
  }


  ionViewDidLoad() {
    setTimeout(() => {
      this.splash = false;
    }, 4000);
  }

  login(){
    this.navCtrl.setRoot(TabsPage);
  }
  adesao(){
    this.navCtrl.push(AdesaoPage);
  }
  ionViewWillEnter(){
    this.menu.swipeEnable(false);
/*comentar em dev
    this.androidPermissions.checkPermission(this.androidPermissions.PERMISSION.READ_SMS).then(
      success => console.log('Permission granted'),
    err => this.androidPermissions.requestPermission(this.androidPermissions.PERMISSION.READ_SMS)
    );

    this.androidPermissions.requestPermissions([this.androidPermissions.PERMISSION.READ_SMS]);
*/
  }
  ionViewDidLeave(){
    this.menu.swipeEnable(true);
  }

}
