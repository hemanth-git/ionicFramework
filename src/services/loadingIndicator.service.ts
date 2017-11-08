import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';
@Injectable()
export class LoadingIndicator {

    private loaderIndicator: Loading;
    constructor(private loadingCtrl: LoadingController) {

    }

    /**
     * Shows page loading.
     */
    showLoading() {
        console.log('showing loader');
        this.loaderIndicator = this.loadingCtrl.create({
            spinner: 'bubbles',
            content: "Please wait...",
        });

        // duration: 5000
        //dismissOnPageChange: true
        this.loaderIndicator.present();
    }

    /**
    * Hide page loading.
    */
    hideLoading() {
        console.log('closing loader');
        //this.loaderIndicator.dismiss();
        //return;
        this.loaderIndicator.present().then(() => {

            this.loaderIndicator.dismiss();

        });

        // console.log('closed loader');
    }

}