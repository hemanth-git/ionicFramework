import { ProductService } from './../services/ProductService';
import { LoadingIndicatorService } from './../services/loadingIndicatorService';
import { ManageRootPageService } from './../services/ManageRootPageService';

import { MenuNavigationPage } from './../pages/menu-navigation/MenuNavigationPage';
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
    ManageRootPageService, LoadingIndicatorService, ProductService
  ]
})

export class AppModule { }
