import { Injectable } from '@angular/core';
import { LoadingController, Loading } from 'ionic-angular';
@Injectable()
export class LoadingIndicatorService {

    private loaderIndicator: Loading;
    private activeLoaders = 0;
    constructor(private loadingCtrl: LoadingController) {

    }

    /**
     * Shows page loading.
     */
    showLoading() {
        if (this.activeLoaders === 0) {
            console.log('showing loader');
            this.loaderIndicator = this.loadingCtrl.create({
                spinner: 'bubbles',
                content: "Please wait...",
                duration: 5000
            });

            this.loaderIndicator.onDidDismiss(data => {
                this.activeLoaders--;
                console.log('reduced loaders count: ' + this.activeLoaders);
            });
            // duration: 5000
            //dismissOnPageChange: true
            this.loaderIndicator.present();
            this.activeLoaders++;
        } else {
            console.log('+++++++++++++++ ' + this.activeLoaders);
        }
    }

    /**
    * Hide page loading.
    */
    hideLoading() {
        if (this.activeLoaders === 1) {
            console.log('closing loader');
            this.loaderIndicator.present().then(() => {
                this.loaderIndicator.dismiss();
            });
        }
        else {
            console.log('----------------- ' + this.activeLoaders);
        }
    }

}