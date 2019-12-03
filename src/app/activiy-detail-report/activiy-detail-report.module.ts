import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';

import { IonicModule } from '@ionic/angular';

import { ActiviyDetailReportPage } from './activiy-detail-report.page';

const routes: Routes = [
  {
    path: '',
    component: ActiviyDetailReportPage
  }
];

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RouterModule.forChild(routes)
  ],
  declarations: [ActiviyDetailReportPage]
})
export class ActiviyDetailReportPageModule {}
