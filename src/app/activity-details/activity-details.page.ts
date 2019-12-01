
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Activity } from 'src/interfaces';
import { AngularFirestore } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { AlertMessageService } from '../services/alert-message.service';

@Component({
  selector: 'app-activity-details',
  templateUrl: './activity-details.page.html',
  styleUrls: ['./activity-details.page.scss'],
})
export class ActivityDetailsPage implements OnInit {
  activityId: string;
  currentActivity: Activity = {};
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
    this.db.collection('activities').doc(this.activityId).valueChanges().pipe(take(1))
      .subscribe(data => {
        this.currentActivity = data;
        if (this.currentActivity.isMeal) {
          this.title = 'Meal Details';
        }
        else {
          this.title = 'Activity Details';
        }
        // console.log('current activity ', this.currentActivity);
      });
  }


  goToConversation() {
    this.router.navigate(['/conversation']);
  }

  openTodaysMenu() {
    this.alert.customMessage('Not yet implemented!');
  }

  goToGallery() {
    this.alert.customMessage('Not yet implemented!');
  }

  goToReports() {
    this.alert.customMessage('Not yet implemented!');
  }

  goToConfiguration() {
    this.alert.customMessage('Not yet implemented!');
  }
}
