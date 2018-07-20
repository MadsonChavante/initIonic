import { Component } from '@angular/core';

import { HomePage } from '../home/home';
import { SolicitacaoPage } from '../solicitacao/solicitacao';
import { ExtratoPage } from '../extrato/extrato';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = SolicitacaoPage;
  tab3Root = ExtratoPage;

  constructor() {

  }
}
