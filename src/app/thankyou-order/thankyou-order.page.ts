import { Component, OnInit } from '@angular/core';
import { ModalController, NavParams } from '@ionic/angular';
import { Activity } from 'src/interfaces';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou-order',
  templateUrl: './thankyou-order.page.html',
  styleUrls: ['./thankyou-order.page.scss'],
})
export class ThankyouOrderPage implements OnInit {
  activity: Activity;
  constructor(
    private modalCtrl: ModalController,
    private navParams: NavParams,
    public router: Router,
  ) { }

  ngOnInit() {

  }

  goToActivityList() {
    this.modalCtrl.dismiss();
  }

  goToActivityDetails() {
    console.log(this.activity);
    this.router.navigate(['/activity-details/' + this.activity.id]);
    this.modalCtrl.dismiss();
  }

  ionViewWillEnter() {
    this.activity = this.navParams.get('activity');
  }
}
