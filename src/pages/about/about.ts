import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { SpellServiceProvider } from '../../providers/spell-service/spell-service';
import _ from "lodash";
import { CacheServiceProvider } from '../../providers/cache-service/cache-service';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
  public spells: any[];
  constructor(public navCtrl: NavController, public spellService: SpellServiceProvider, public alertCtrl: AlertController, public cacheCtrl: CacheServiceProvider) {
    this.loadList();
  }
  public getDamage(id: number) {
    this.spellService.getDamage(id).then((damage: number) => {
      this.alertCtrl.create({
        title: `${Math.round(damage)} dégats !`
      }).present();
      console.log(damage);
    });
  }

  public ionViewDidEnter() {
    console.log('koukoukou')
    this.loadList();
  }

  private loadList() {
    this.cacheCtrl.getItem("currentPerso").then((p: any) => {
      this.spells = this.spellService.getSpells();
      this.spells = _.filter(this.spells, (s) => {
        return s.minLevel <= p.level;
      });
    });
  }
}
