import { HttpService } from './../services/httpService.service';
import { LoadingIndicator } from './../services/loadingIndicator.service';
import { MenuNavigationPage } from './../pages/menu-navigation/MenuNavigationPage';
import { ManageRootPageService } from './../services/ManageRootPage.service';
import { MyApp } from './MyApp';
import { ListPage } from './../pages/list/list';
import { CartPage } from './../pages/cart/CartPage';
import { FooterTabs } from './../pages/footer/FooterTabs';
import { SearchPage } from './../pages/search/searchPage';
import { HomePage } from './../pages/home/HomePage';

import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpModule } from '@angular/http';

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    SearchPage,
    FooterTabs, CartPage, MenuNavigationPage
  ],
  imports: [
    BrowserModule, HttpModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage, SearchPage, CartPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    ManageRootPageService, LoadingIndicator, HttpService
  ]
})

export class AppModule { }
