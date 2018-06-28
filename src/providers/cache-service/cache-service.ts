import { Injectable } from '@angular/core';
import lf from "localforage";

/*
  Generated class for the CacheServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class CacheServiceProvider {

  constructor() {
    console.log('Hello CacheServiceProvider Provider');
  }
  public getItem(str: string) {
    return lf.getItem(str);
  }

  public setItem(str: string, content: any) {
    return lf.setItem(str, content);
  }

  public clearCache() {
    return lf.clear();
  }
}
