import { Component, OnInit, OnDestroy } from '@angular/core';
import { HomeConstants } from '../home.constants';
import { Router, ActivatedRoute } from '@angular/router';
import { MenuService } from 'src/app/services/menu.service';
// import { AuthService } from 'src/app/services/auth.service';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
// import { MintAccountComponent } from 'src/app/components/mint-account/mint-account.component';
import { Observable } from 'rxjs';
import { ToastService } from 'src/app/services/toast.service';

@Component({
  selector: 'app-hanumaan-chalisa',
  templateUrl: './hanumaan-chalisa.component.html',
  styleUrls: ['./hanumaan-chalisa.component.scss'],
})
export class HanumaanChalisaComponent implements OnInit {
  BTN = HomeConstants.BTN;
  // PAGE_BOTTOM1 = HomeConstants.PAGE_BOTTOM1;
  PAGE_SUBTITLE = HomeConstants.PAGE_SUBTITLE;
  PAGE_HEADER = HomeConstants.SHREE_HANUMAAN_CHALISA;
  PAGE_SUB_HEADER = HomeConstants.SUB_HEADER;
  // STEP1_BOTTOM = HomeConstants.STEP1_BOTTOM;
  BTTN1 = HomeConstants.BTTN;
  routeSub: any;
  constructor(private router: Router, private navigationService: MenuService,
              private toast: ToastService,
              public dialog: MatDialog,
              private activeRoute: ActivatedRoute,
               ) {
  }

  ngOnInit() { }
  hanumaanbttn() {
    this.navigationService.setCompletedMenu('Hanumaan-bhakti-darshan');
    this.router.navigate(['/home/bajrang-baan']);

  }
  // createAccount() {
  //   this.router.navigate(['/auth/signup']);
  // }
  gotoHomePage() {
    this.router.navigate(['/home']);
  }
}
