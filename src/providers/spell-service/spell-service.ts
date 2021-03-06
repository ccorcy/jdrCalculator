import _ from "lodash";
import { Injectable } from '@angular/core';
import { CacheServiceProvider } from "../cache-service/cache-service";

/*
  Generated class for the SpellServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class SpellServiceProvider {
  public currentPerso: any;
  public spells: any[] = [
    {
      id: 0,
      class: "primeHunter",
      minLevel: 0,
      name: 'Coup de feu',
      bgColor: '#f94626',
      textColor: 'white',
      compute: (perso: any) => {
        return 5 + (perso.level * 2) + (perso.strength * 0) + (perso.agility * 3) + (perso.intel * 0) + (perso.pe * 0.5)
      }
    },
    {
      id: 1,
      class: "primeHunter",
      minLevel: 0,
      name: 'Fiole Empoisonée',
      bgColor: '#25851c',
      textColor: 'white',
      compute: (perso: any) => {
        return 2 + (perso.level * 1) + (perso.strength * 0) + (perso.agility * 0) + (perso.intel * 2) + (perso.pe * 0.2)
      }
    },
    {
      id: 2,
      class: "primeHunter",
      minLevel: 3,
      name: 'Rafale (U)',
      bgColor: '#254550',
      textColor: 'white',
      compute: (perso: any) => {
        return (5 + (perso.level * 2) + (perso.strength * 0) + (perso.agility * 3) + (perso.intel * 0) + (perso.pe * 0.5)) * 3
      }
    },
    {
      id: 3,
      class: "primeHunter",
      minLevel: 0,
      name: 'Fiole explosive',
      bgColor: '#934550',
      textColor: 'white',
      compute: (perso: any) => {
        return 10 + (perso.level * 2) + (perso.strength * 0) + (perso.agility * 0) + (perso.intel * 3) + (perso.pe * 0.3) 
      }
    },
    {
      id: 4,
      class: "primeHunter",
      minLevel: 0,
      name: 'Fiole cramoisie',
      bgColor: '#9A3255',
      textColor: 'white',
      compute: (perso: any) => {
        return 10 + (perso.level * 2) + (perso.strength * 0) + (perso.agility * 0) + (perso.intel * 3) + (perso.pe * 0)
      }
    },
    {
      id: 5,
      class: "primeHunter",
      minLevel: 0,
      name: 'Tir puissant',
      bgColor: '#912350',
      textColor: 'white',
      compute: (perso: any) => {
        return 50 + (perso.level * 3) + (perso.strength * 0) + (perso.agility * 3) + (perso.intel * 0) + (perso.pe * 0.5)
      }
    },
    {
      id: 6,
      class: "primeHunter",
      minLevel: 0,
      name: 'Enchainement (P)',
      bgColor: '#934900',
      textColor: 'white',
      compute: (perso: any) => {
        return 10 + (perso.level * 0) + (perso.strength * 0) + (perso.agility * 2.5) + (perso.intel * 0) + (perso.pe * 0)
      }
    },
    {
      id: 7,
      class: "primeHunter",
      minLevel: 0,
      name: 'Écran de fumée',
      bgColor: '#934232',
      textColor: 'white',
      compute: (perso: any) => {
        return 10 + (perso.level * 0) + (perso.strength * 0) + (perso.agility * 2.5) + (perso.intel * 0) + (perso.pe * 0)
      }
    },
    {
      id: 8,
      class: "primeHunter",
      minLevel: 0,
      name: 'Couteau de lancé',
      bgColor: '#932142',
      textColor: 'white',
      compute: (perso: any) => {
        return 6 + (perso.level * 2) + (perso.strength * 0) + (perso.agility * 4) + (perso.intel * 0) + (perso.pe * 0.4)
      }
    },
    {
      id: 9,
      class: "cannonier",
      minLevel: 0,
      name: 'Boulet de canon',
      bgColor: '#932222',
      textColor: 'white',
      compute: (perso: any) => {
        return 3 + (perso.level * 2) + (perso.strength * 2) + (perso.agility * 0) + (perso.intel * 0) + (perso.pe * 0.5)
      }
    },
    {
      id: 10,
      class: "cannonier",
      minLevel: 0,
      name: 'Surchauffe',
      bgColor: '#9322AF',
      textColor: 'white',
      compute: (perso: any) => {
        return 70 + (perso.level * 0) + (perso.strength * -2.5) + (perso.agility * 0) + (perso.intel * -1) + (perso.pe * 0)
      }
    },
    {
      id: 11,
      class: "cannonier",
      minLevel: 3,
      name: 'CHARRRRGGGEZZZ (U)',
      bgColor: '#9712AF',
      textColor: 'white',
      compute: (perso: any) => {
        return 20 + (perso.level * 3) + (perso.strength * 3) + (perso.agility * 0) + (perso.intel * 0) + (perso.pe * 0.4)
      }
    },
    {
      id: 12,
      class: "soldat",
      minLevel: 0,
      name: 'Tir de barrage',
      bgColor: '#9967AF',
      textColor: 'white',
      compute: (perso: any) => {
        return 2 + (perso.level * 2) + (perso.strength * 0) + (perso.agility * 2) + (perso.intel * 0) + (perso.pe * 0.5)
      }
    },
    {
      id: 13,
      class: "soldat",
      minLevel: 0,
      name: 'Champ symbiotique',
      bgColor: '#5567AF',
      textColor: 'white',
      compute: (perso: any) => {
        return 5 + (perso.level * 2) + (perso.strength * 0) + (perso.agility * 0) + (perso.intel * 2) + (perso.pe * 0.2)
      }
    },
    {
      id: 14,
      class: "soldat",
      minLevel: 0,
      name: 'Rocket LX',
      bgColor: '#55854F',
      textColor: 'white',
      compute: (perso: any) => {
        return 10 + (perso.level * 5) + (perso.strength * 0) + (perso.agility * 3) + (perso.intel * 0) + (perso.pe * 0.4)
      }
    },
    {
      id: 15,
      class: "soldat",
      minLevel: 0,
      name: 'Frappe Nucléaire',
      bgColor: '#FF854F',
      textColor: 'white',
      compute: (perso: any) => {
        return 20 + (perso.level * 4) + (perso.strength * 0) + (perso.agility * 3) + (perso.intel * 0) + (perso.pe * 0.4)
      }
    }
  ]
  constructor(public cacheCtrl: CacheServiceProvider) {
    console.log('Hello SpellServiceProvider Provider');
    this.cacheCtrl.getItem("currentPerso").then((p: any) => {
      this.currentPerso = p;
    });
  }
  public getSpells() {
    return this.spells;
  }
  public getDamage(spellId: number) {
    return new Promise((resolve, reject) => {
      this.cacheCtrl.getItem("currentPerso").then((p: any) => {
        this.currentPerso = p;
        let damage = _.find(this.spells, (s) => {
          return s.id === spellId;
        });
        if (!damage) {
          reject('error');
        }
        resolve(damage.compute(this.currentPerso));
      });
    })
  }
}
