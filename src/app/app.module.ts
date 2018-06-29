import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { GrimoirePage } from '../pages/grimoire/grimoire';
import { ContactPage } from '../pages/contact/contact';
import { PersonnagePage } from '../pages/personnage/personnage';
import { TabsPage } from '../pages/tabs/tabs';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { SpellServiceProvider } from '../providers/spell-service/spell-service';
import { CacheServiceProvider } from '../providers/cache-service/cache-service';

@NgModule({
  declarations: [
    MyApp,
    GrimoirePage,
    ContactPage,
    PersonnagePage,
    TabsPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    GrimoirePage,
    ContactPage,
    PersonnagePage,
    TabsPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpellServiceProvider,
    CacheServiceProvider
  ]
})
export class AppModule {}
