import { ManageRootPageService } from './../../services/ManageRootPageService';
import { CartPage } from './../cart/CartPage';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Platform, Nav } from 'ionic-angular';
import { ListPage } from './../list/list';

import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
    selector: 'menu-navigation',
    templateUrl: 'menu-navigation.template.html'
})

export class MenuNavigationPage implements OnInit {

    @ViewChild(Nav) nav: Nav;

    pages: Array<{ title: string, component: any }>;

    constructor(private platform: Platform, private statusBar: StatusBar,
        private splashScreen: SplashScreen, private manageRootPageService: ManageRootPageService) {

        this.initializeApp();

        // used for an example of ngFor and navigation
        this.pages = [
            { title: 'cart', component: CartPage },
            { title: 'List', component: ListPage }
        ];

    }

    initializeApp() {
        this.platform.ready().then(() => {
            // Okay, so the platform is ready and our plugins are available.
            // Here you can do any higher level native things you might need.
            this.statusBar.styleDefault();
            this.splashScreen.hide();
        });
    }

    openPage(page) {
        // Reset the content nav to have just this page
        // we wouldn't want the back button to show in this scenario
        this.nav.push(page.component);
    }



    ngOnInit() {
        this.manageRootPageService.getEventEmitter().subscribe(event => {
            console.log("event came: ", event);
            this.nav.setRoot(event);
            console.log("pushed to nav");
        });
    }


}