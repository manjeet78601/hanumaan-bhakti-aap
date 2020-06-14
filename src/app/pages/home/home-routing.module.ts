import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomePage } from './home.page';
import { LandingComponent } from './landing/landing.component';

// import { ChoosePlanComponent } from './choose-plan/choose-plan.component';
import { ContactComponent } from './contact/contact.component';
import { HelpComponent } from './help/help.component';

import { HanumaanChalisaComponent } from './hanumaan-chalisa/hanumaan-chalisa.component';
import { BajrangBaanComponent } from './bajrang-baan/bajrang-baan.component';
import { SunderkandComponent } from './sunderkand/sunderkand.component';
import { HanumaanAshtakComponent } from './hanumaan-ashtak/hanumaan-ashtak.component';
import { HanumaanArtiComponent } from './hanumaan-arti/hanumaan-arti.component';
import { RamayanArtiComponent } from './ramayan-arti/ramayan-arti.component';

const routes: Routes = [
  // {
  //   path: 'insurance-calculator',
  //   component: InsuranceCalculatorComponent
  // },
  {
    path: 'hanumaan-chalisa',
    component: HanumaanChalisaComponent
  },

  // {
  //   path: 'budget',
  //   component: FinancialBudgetComponent
  // },
  {
    path: 'bajrang-baan',
    component: BajrangBaanComponent
  },
  // {
  //   path: 'chooseplan',
  //   component: ChoosePlanComponent
  // },
  {
    path: 'sunderkand',
    component: SunderkandComponent
  },
  {
    path: 'contact',
    component: ContactComponent
  },
  // {
  //   path: 'esign',
  //   component: EsignatureComponent
  // },
  // {
  //   path: 'help',
  //   component: HelpComponent
  // },
  // {
  //   path: 'total-budget',
  //   component: TotalBudgetCalculatorComponent
  // },
  // {
  //   path: 'health',
  //   component: HealthQuestionsComponent
  // },
  {
    path: 'hanumaan-ashtak',
    component: HanumaanAshtakComponent
  },
  // {
  //   path: 'quote',
  //   component: QuoteComponent
  // },
  {
    path: 'hanumaan-arti',
    component: HanumaanArtiComponent
  },

  { path: 'ramayan-arti',
  component: RamayanArtiComponent

  },

  {
    path: '',
    component: LandingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomePageRoutingModule {}
