
import { HttpService } from './../../services/httpService.service';
import { LoadingIndicator } from './../../services/loadingIndicator.service';

import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cart-page',
    templateUrl: 'cart.template.html'
})

export class CartPage implements OnInit, MyRootPage {




    constructor(private loadingIndicator: LoadingIndicator, private httpService: HttpService) {

    }

    ngOnInit() {
        //this.loadingIndicator.showLoading();
        this.loadingIndicator.showLoading();
        this.httpService.callLateService().subscribe(data => {
            console.log('call 1');
            this.loadingIndicator.hideLoading();
        }, error => {

        });
    }

}