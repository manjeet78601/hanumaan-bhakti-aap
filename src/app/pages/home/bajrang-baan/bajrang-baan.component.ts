import { Component, OnInit } from '@angular/core';
import { HomeConstants, } from './../home.constants';
// import { from } from 'rxjs';
// import { LoaderService } from 'src/app/services/loader.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bajrang-baan',
  templateUrl: './bajrang-baan.component.html',
  styleUrls: ['./bajrang-baan.component.scss'],
})
export class BajrangBaanComponent implements OnInit {
  panelOpenState = false;
  DOM_CONSTANTS = HomeConstants.FINANCIALBUDGET;
  PAGE_HEADER = HomeConstants.BUDGET_HEADER;
  PAGE_SUBHEADER = HomeConstants.BUDGET_SUB_HEADER;
  BTN = HomeConstants.BTN;

  constructor(
    private router: Router) {}

  ngOnInit() {
  }
  calculateBudget() {
      this.router.navigate(['/home/sunderkand']);
}

  createAccount() {
    this.router.navigate(['/auth/signup']);
  }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}

