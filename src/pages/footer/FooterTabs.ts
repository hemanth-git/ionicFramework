import { ManageRootPageService } from './../../services/ManageRootPageService';

import { HomePage } from './../home/HomePage';
import { CartPage } from './../cart/CartPage';

import { Component } from '@angular/core';


@Component({
    selector: 'footer-tabs',
    templateUrl: 'footerTabs.template.html'
})

export class FooterTabs {

    cartPage = CartPage;
    homePage = HomePage;

    constructor(private manageRootPageService: ManageRootPageService) {

    }

    /**
     * Emits event to change root page.
     * @param page 
     */
    emitRootPageEvent(page: MyRootPage): void {
        console.log("emitting event, page: ", page);
        this.manageRootPageService.changeRootPage(page);

    }

}