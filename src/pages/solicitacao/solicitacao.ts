import { Component } from '@angular/core';
import { ModalController,IonicPage, NavController, NavParams } from 'ionic-angular';

import {ModalPage} from '../modal/modal'

@IonicPage()
@Component({
  selector: 'page-solicitacao',
  templateUrl: 'solicitacao.html',
})
export class SolicitacaoPage {
  valor;
  myParam;
  contas = [
    { name: 'Banco do Brasil 1234-7/12322-4', value: "1" },
    { name: 'Bradesco 1234-7/12322-5', value: "2" },
    { name: 'Santander 1234-7/12322-6', value: "3" }
  ];
  conta = this.contas[0];

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public modalCtrl: ModalController
  ) {}

  openModalWithParams() {
    this.myParam = { conta: this.conta ,
      valor: this.valor
    };

    let myModal = this.modalCtrl.create(ModalPage, { 'myParam': this.myParam });
    myModal.present();
  }

}
