import { Component, OnInit } from '@angular/core';
import { CompareQuotesConstant, } from '../../../properties/compare-quotes.constant';
import { Router } from '@angular/router';
import { UserService } from 'src/app/services/user.service';
import { MenuService } from 'src/app/services/menu.service';
// import { AuthService } from 'src/app/services/auth.service';
import { ChartOptions, ChartType, ChartDataSets } from 'chart.js';
import { Label, PluginServiceGlobalRegistrationAndOptions } from 'ng2-charts';


// // Datasource for table
// export interface QuoteComparision {
//   comparison: string;
//   prudential: string;
//   nyLife: string;
//   massMutual: string;
//   libertyMutual: string;
// }

// const monthlyPremium: QuoteComparision[] = [
//   { comparison: 'Monthly Premium', prudential: '$25', nyLife: '$30', massMutual: '$35', libertyMutual: '$50' },
// ];
// const policyCov: QuoteComparision[] = [
//   { comparison: 'Policy Coverage', prudential: '$500k', nyLife: '$500k', massMutual: '$500k', libertyMutual: '$500k' },
// ];
// const policyDuration: QuoteComparision[] = [
//   { comparison: 'Policy Duration', prudential: '10 years', nyLife: '20 years', massMutual: '30 years', libertyMutual: 'Whole life' },
// ];
// const cashvalue: QuoteComparision[] = [
//   { comparison: 'Cash value', prudential: 'No', nyLife: 'No', massMutual: 'No', libertyMutual: 'Yes' },
// ];


@Component({
  selector: 'app-hanumaan-arti',
  templateUrl: './hanumaan-arti.component.html',
  styleUrls: ['./hanumaan-arti.component.scss'],
})
export class HanumaanArtiComponent implements OnInit {
  collapse = [];
  DOM_CONSTANTS = CompareQuotesConstant.QUOTE;
  // displayedColumns: string[] = ['comparison', 'prudential', 'nyLife', 'massMutual', 'libertyMutual'];
 
  BTN = CompareQuotesConstant.BTTN;
  quotes: any;
  isLoading = true;
  isUerLoggedIn: boolean;
  details: any;
  showDiv: boolean = false;
  hideDiv = [];
 
  constructor(
    private router: Router,
    private userService: UserService,
    private menuService: MenuService,
  ) {
  }
  ngOnInit() {
    setTimeout(() => {
      this.isLoading = false;
    }, 2000);
    this.quotes = this.getQuotes();
    console.log(this.quotes);
  }
  onSlideClicked(value: any) {
    this.showDiv = this.hideDiv[value.activeId];
  }
  showDetails(prodId, value: any) {
    if (prodId === value.activeId) {
      this.hideDiv[prodId] = true;
      this.showDiv = true;
    }
  }
  hideDetails(prodId, value: any) {
    if (prodId === value.activeId) {
      this.hideDiv[prodId] = false;
      this.showDiv = false;
    }
  }

  goToNext() {
   
    {
      this.router.navigate(['/home/ramayan-arti']);
    }
  }
  getQuotes() {
    return this.userService.getQuoteList();
  }
  createAccount() {
    return this.userService.createAccount();
  }
  getPrevious() {
    this.router.navigate(['/home/hanumaan-ashtak']);
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}



