import { Component, OnInit } from '@angular/core';
import { CompareQuotesConstant, } from '../../../properties/compare-quotes.constant';
import { Router } from '@angular/router';
// import { UserService } from 'src/app/services/user.service';
// import { MenuService } from 'src/app/services/menu.service';

// export interface QuoteComparision {
//   comparison: string;
//   prudential: string;
//   nyLife: string;
//   massMutual: string;
//   libertyMutual: string;
// }

@Component({
  selector: 'app-ramayan-arti',
  templateUrl: './ramayan-arti.component.html',
  styleUrls: ['./ramayan-arti.component.scss'],
})
export class RamayanArtiComponent implements OnInit {
  collapse = [];
  DOM_CONSTANTS = CompareQuotesConstant.QUOTE1;
  BTN = CompareQuotesConstant.BTTN;
  // quotes: any;
  // isLoading = true;
  // isUerLoggedIn: boolean;
  // details: any;
  // showDiv: boolean = false;
  // hideDiv = [];
  constructor(
    private router: Router,
    // private userService: UserService,
    // private menuService: MenuService,
  ) {
  }
  ngOnInit() {
    // setTimeout(() => {
    //   this.isLoading = false;
    // }, 2000);
    // this.quotes = this.getQuotes();
    // console.log(this.quotes);
  }
  // getQuotes() {
  //   return this.userService.getQuoteList();
  // }
  // createAccount() {
  //   return this.userService.createAccount();
  // }
  getPrevious() {
    this.router.navigate(['/home/ramayan-arti']);
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}


