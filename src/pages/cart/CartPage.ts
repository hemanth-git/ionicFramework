import { ProductService } from './../../services/ProductService';
import { LoadingIndicatorService } from './../../services/loadingIndicatorService';


import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'cart-page',
    templateUrl: 'cart.template.html'
})

export class CartPage implements OnInit, MyRootPage {

    constructor(private loadingIndicator: LoadingIndicatorService,
        private productService: ProductService) {

    }

    searchProduct() {
        this.productService.getProducts().subscribe(data => {

        });
    }
    ngOnInit() {
        //this.loadingIndicator.showLoading();
        // this.loadingIndicator.showLoading();
        // this.httpService.callLateService().subscribe(data => {
        //     console.log('call 1');
        //     this.loadingIndicator.hideLoading();
        // }, error => {

        // });
    }

}