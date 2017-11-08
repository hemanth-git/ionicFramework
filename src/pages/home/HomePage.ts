
import { Component } from '@angular/core';

@Component({
  selector: 'home-page',
  templateUrl: 'home.html'
})
export class HomePage implements MyRootPage {

  showSearch = false;
  searchText: string;

  search(text) {
    console.log("search text: " + this.searchText);

  }
  cancelSearch(event) {
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
