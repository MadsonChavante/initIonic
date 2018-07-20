import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SolicitacaoPage } from '../solicitacao/solicitacao';
import { ExtratoPage } from '../extrato/extrato';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController) {
  }

  Root1 = SolicitacaoPage;
  Root2 = ExtratoPage;

}
