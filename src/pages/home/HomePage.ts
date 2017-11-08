import { ProductService } from './../../services/ProductService';
import { LoadingIndicatorService } from './../../services/loadingIndicatorService';

import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage implements MyRootPage {

  showSearch = false;
  searchText: string;
  searchResults = [];

  constructor(private loadingIndicator: LoadingIndicatorService,
    private productService: ProductService) {
      this.searchResults = ["error"];

  }
  /**
   * Searches for product.
   * @param text 
   */
  search(text: string): void {
    console.log("search text: " + this.searchText);
    this.loadingIndicator.showLoading();
    this.productService.getProducts().subscribe(data => {
      console.log('search data: ', data);
      this.loadingIndicator.hideLoading();
    }, error => {
      this.loadingIndicator.hideLoading();
      this.searchResults = [error];
    });
  }

  /**
   * disables search text box.
   * @param event 
   */
  cancelSearch(event): void {
    this.showSearch = false;
  }
  // @ViewChild(Nav) nav: Nav;
  // constructor(public navCtrl: NavController) {

  // }

  // openPage(page) {
  //   // Reset the content nav to have just this page
  //   // we wouldn't want the back button to show in this scenario
  //   this.nav.setRoot(SearchPage);
  // }

}
