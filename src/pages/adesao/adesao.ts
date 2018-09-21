import { Component } from '@angular/core';
import { NavController, NavParams, Platform, ToastController  } from 'ionic-angular';
import { TabsPage } from '../tabs/tabs';
declare var SMS:any;
@Component({
  selector: 'page-adesao',
  templateUrl: 'adesao.html',
})

export class AdesaoPage {

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public platform:Platform,
    private toastCtrl: ToastController
  ) {
  }

  token : String;
  buttonDisabled : Boolean = null;

  gerarToken(){
    var car = [
      "A","B","C","D","E","X","7","5","9"
    ];
    var novoToken = "";
    for(var i = 0; i < 5; i++){
      var x = Math.floor((Math.random() * 9) );
      novoToken += car[x];
    }
    this.token = novoToken;
    return novoToken;
  }

  aguardaSms() {
    this.platform.ready().then((readySource) => {
      if (SMS) SMS.startWatch(() => {
        console.log('watching started');
      }, Error => {
        this.buttonDisabled = null;
        console.log('failed to start watching');
      });

      document.addEventListener('onSMSArrive', (e: any) => {
        var sms = e.data;
        //verificando o que ele recebeu com o token
        if(sms.body.toString() == this.token){
          document.querySelector('.chave').innerHTML = sms.body;
          //criar toast
          let toast = this.toastCtrl.create({
            message: 'Confirmação no sistema efetuada com sucesso',
            duration: 3000,
            position: 'bottom',
            cssClass: 'toast'
          });
          toast.onDidDismiss(() => {
            this.navCtrl.setRoot(TabsPage);
          });
          toast.present();
        }else{
          this.buttonDisabled = null;
        }
      });

    });
  }

  confirmaAdesao() {
    this.buttonDisabled = true;
    this.platform.ready().then((readySource) => {
      if (SMS) SMS.sendSMS("+5585999253354", this.gerarToken(), () => {
          this.aguardaSms();
      }, Error => {
        console.log("Error occurs")
        this.buttonDisabled = null;
      });
    });
  }
}
