import { Component, OnInit } from '@angular/core';
import { HomeConstants} from './../home.constants';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.scss'],
})
export class LandingComponent  {
  DOM_CONSTANTS = HomeConstants.HOME_PAGE;
  constructor( ) { }


}
