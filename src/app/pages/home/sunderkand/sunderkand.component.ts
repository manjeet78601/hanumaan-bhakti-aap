import { Component, OnInit } from '@angular/core';
import { HomeConstants } from './../home.constants';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { UserService } from 'src/app/services/user.service';
import { AuthService } from 'src/app/services/auth.service';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-sunderkand',
  templateUrl: './sunderkand.component.html',
  styleUrls: ['./sunderkand.component.scss'],
})
export class SunderkandComponent implements OnInit {

  DOM_CONSTANTS = HomeConstants.BUDGET_CALCULATOR;
  BTN = HomeConstants.BTN;
  amountLeft = 1000;
  totals: any[];
  isUerLoggedIn: boolean;
  constructor(
    private router: Router,
    private navigationService: MenuService,
    private userService: UserService,
    private auth: AuthService,
    private toast: ToastService
  ) {
    this.isUerLoggedIn = this.auth.isUserLoggedIn;
  }

  ngOnInit() {
    // this.getTotals();

  }

  getQuote() {
    this.navigationService.setCompletedMenu('Sunderkand');
    this.router.navigate(['/home/hanumaan-ashtak']);
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}

