import { Component, OnInit } from '@angular/core';
import { HomeConstants } from './../home.constants';
import { LoaderService } from 'src/app/services/loader.service';
import { Router } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { UserService } from 'src/app/services/user.service';
import { FormGroup, FormBuilder } from '@angular/forms';


@Component({
  selector: 'app-health-questions',
  templateUrl: './health-questions.component.html',
  styleUrls: ['./health-questions.component.scss'],
})
export class HealthQuestionsComponent implements OnInit {
  panelOpenState = false;
  name1: string;
  name: string;
  birthDate: Date;
  insuranceText: string;

  DOM_CONSTANTS = HomeConstants.HEALTHQUESTIONS;
  PAGE_HEADER = HomeConstants.HEALTH_HEADER;
  PAGE_SUBHEADER = HomeConstants.HEALTH_SUB_HEADER;
  PAGE_LINE = HomeConstants.HEALTH_LINE;
  BTN = HomeConstants.BTN;
  // DOM_CONSTANTS = HomeConstants.FINANCIALBUDGET;
  progress = 0;
  constructor(
    private loader: LoaderService,
    private router: Router,
    private navigationService: MenuService,
    private userService: UserService,
  ) { }

  ngOnInit() { }




   submit(f1) {
    console.log(f1);
    const totalbudget = [];
    this.navigationService.setCompletedMenu('Comparing Quotes');
    this.loader.showAutoHideLoader('Please give us a few moments..', 3000);
    setTimeout(() => {
      this.router.navigate(['/home/quote']);
    }, 2000);
  }
createAccount() {
    this.router.navigate(['/auth/signup']);
  }
}
