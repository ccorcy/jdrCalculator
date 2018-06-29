import { Component } from '@angular/core';

import { GrimoirePage } from '../grimoire/grimoire';
import { ContactPage } from '../contact/contact';
import { PersonnagePage } from '../personnage/personnage';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = PersonnagePage;
  tab2Root = GrimoirePage;
  tab3Root = ContactPage;

  constructor() {

  }
}
