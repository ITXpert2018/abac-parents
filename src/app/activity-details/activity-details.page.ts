
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/interfaces';
import { AngularFirestore } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { AlertMessageService } from '../services/alert-message.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.page.html',
  styleUrls: ['./activity-details.page.scss'],
})
export class ActivityDetailsPage implements OnInit {
  activityId: string;
  currentActivity: Activity = {};
  activities: Activity[] = [];

  title: string;
  constructor(
    private route: ActivatedRoute,
    private db: AngularFirestore,
    private router: Router,
    private alert: AlertMessageService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    // this.currentActivity = {};
    this.title = '';
    this.activityId = this.route.snapshot.params['activityId'];
    // console.log('activityId ', this.activityId);


    firebase.database().ref('/activities/').once('value', (snapshot) => {
      this.activities = [];
      snapshot.forEach( snap => {
        if(snap.val().id == this.activityId){
          this.currentActivity = snap.val();

          if (this.currentActivity.isMeal ==true) {
            this.title = 'Meal Details';
          }
          else {
            this.title = 'Activity Details';
          }
          console.log(this.currentActivity);
          return;
        }
      });
    });      

  }


  goToConversation() {
    this.router.navigate(['/conversation']);
  }

  openTodaysMenu() {
    this.alert.customMessage('Not yet implemented!');
  }

  goToGallery() {
    this.router.navigate(['/activiy-detail-photo/' + this.activityId]);

  }

  goToReports() {
    this.router.navigate(['/activiy-detail-report/' + this.activityId]);
  }

  goToConfiguration() {
    this.alert.customMessage('Not yet implemented!');
  }
}
