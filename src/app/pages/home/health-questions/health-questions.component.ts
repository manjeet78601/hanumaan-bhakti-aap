import { Component, OnInit } from '@angular/core';
import { HomeConstants } from './../home.constants';
import { LoaderService } from 'src/app/services/loader.service';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
import { UserService } from 'src/app/services/user.service';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataAnalyticsService, CategoryName, PageName, Action, PersonalDetailLabel } from 'src/app/services/data-analytics.service';
import { FormGroup , Validator} from '@angular/forms';




@Component({
  selector: 'app-health-questions',
  templateUrl: './health-questions.component.html',
  styleUrls: ['./health-questions.component.scss'],
})
export class HealthQuestionsComponent implements OnInit {

  state = 1;
  personalInfoForm: FormGroup;
  personalQuestForm: FormGroup;
  endDate: Date = new Date();
  data: any;
  isLoading = true;
  // tslint:disable-next-line:no-string-literal
  // id = this.actRoute.snapshot.params['id'];
  panelOpenState = false;

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
    private actRoute: ActivatedRoute,
    private snackbar: MatSnackBar,
    private dataAnalytics: DataAnalyticsService
  ) { }

  ngOnInit() { }




   Submit(health1) {
    console.log(health1);
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
  getDOB() {
    const selectedDate = this.personalInfoForm.value.dob;
    const today = new Date();
    const dateBefore18Years = new Date(today.getFullYear() - 18, today.getMonth() - 1, today.getDate());


    if ( selectedDate > today ) {
      this.openSnackBar('Seems like you are not born yet, Please get back to us once you will be 18 !', null);
      this.personalInfoForm.controls.dob.setValue('');
      return false;
    } else if ((selectedDate < today) && (selectedDate > dateBefore18Years)) {
      this.openSnackBar('Seems like you are minor, See you soon on your 18th birthday !', null);
      this.personalInfoForm.controls.dob.setValue('');
      return false;
    } else {
      return true;
    }
  }
  openSnackBar(message, action = null) {
    this.snackbar.open(message, action, {
      duration: 3000,
      verticalPosition: 'top'
    });
  }
}
