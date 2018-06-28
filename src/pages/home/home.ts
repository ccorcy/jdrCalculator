import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CacheServiceProvider } from '../../providers/cache-service/cache-service';
import _ from "lodash";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public liste: any[];
  public personnage: any;
  public name: any;
  public level: number;
  public hp: number;
  public mana: number;
  public pe: number;
  public strength: number;
  public agility: number;
  public intel: number;
  constructor(public navCtrl: NavController, public cacheCtrl: CacheServiceProvider) {
    this.cacheCtrl.getItem("liste").then((liste: any) => {
      console.log(liste);
      this.liste = liste;
    });
    this.cacheCtrl.getItem("currentPerso").then((p: any) => {
      this.name = p.name;
      this.level = p.level;
      this.hp = p.hp;
      this.mana = p.mana;
      this.pe = p.pe;
      this.strength = p.strength;
      this.agility = p.agility;
      this.intel = p.intel;
    })
  }

  public load() {
    if (!this.personnage) return;
    this.cacheCtrl.getItem(this.personnage).then((stats: any) => {
      console.log(stats);
      this.name = stats.name;
      this.level = stats.level;
      this.hp = stats.hp;
      this.mana = stats.mana;
      this.pe = stats.pe;
      this.strength = stats.strength;
      this.agility = stats.agility;
      this.intel = stats.intel;
      this.cacheCtrl.setItem("currentPerso", stats);
    });
  }

  public save() {
    let stats = {
      name: this.name,
      level: this.level,
      hp: this.hp,
      mana: this.mana,
      pe: this.pe,
      strength: this.strength,
      agility: this.agility,
      intel: this.intel
    }
    console.log(stats);
    this.cacheCtrl.setItem("currentPerso", stats);
    this.cacheCtrl.setItem(stats.name, stats);
    this.cacheCtrl.getItem("liste").then((liste: any) => {
      this.liste = liste;
      console.log(liste);
      if (liste) {
        if (liste.indexOf(stats.name) == -1) {
          liste.push(stats.name);
          this.cacheCtrl.setItem("liste", liste);
          this.liste = liste;
        }
      } else {
        this.cacheCtrl.setItem("liste", [stats.name]);
        this.liste = [stats.name];
      }
    });
  }
}
