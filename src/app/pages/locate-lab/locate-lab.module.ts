import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LocateLabPageRoutingModule } from './locate-lab-routing.module';

import { LocateLabPage } from './locate-lab.page';
import { SharedModule } from 'src/app/sharedModules/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LocateLabPageRoutingModule,
    SharedModule
  ],
  declarations: [LocateLabPage]
})
export class LocateLabPageModule {}