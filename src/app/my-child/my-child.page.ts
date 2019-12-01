import { DataShareService } from './../services/data-share.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticationService } from '../services/authentication.service';
import { Child, ChildActivity } from 'src/interfaces';
import * as moment from 'moment';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.page.html',
  styleUrls: ['./my-child.page.scss'],
})
export class MyChildPage implements OnInit {
  public childs: Child[];
  public enrolledActivities: ChildActivity[];
  public momentjs: any = moment;

  constructor(
    private db: AngularFirestore,
    private auth: AuthenticationService,
    public router: Router,
    private dataShare: DataShareService
  ) { }

  ionViewWillEnter() {
    this.enrolledActivities = [];
    // this.dataShare.refreshMyChilds();
    //subscribe to childrens collection
    this.db.collection('parents').doc(this.auth.getUid()).collection('childrens')
      .snapshotChanges().subscribe(serverItems => {
        this.childs = [];
        serverItems.forEach(a => {
          //this.hasChilds = true;
          let child: Child = a.payload.doc.data();
          // console.log(child);
          child.id = a.payload.doc.id;

          this.childs.push(child);
          // this.dataShare.addChild(child);

          if (child.activitiesEnrolled) {
            for (var i = 0; i < child.activitiesEnrolled.length; i++) {
              //check if activity already added
              var found = false;
              var index = 0;
              for (var j = 0; j < this.enrolledActivities.length; j++) {
                if (this.enrolledActivities[j].id == child.activitiesEnrolled[i].id) {
                  found = true;
                  index = j;
                  break;
                }
              }
              if (!found) {
                let newChildActivity: ChildActivity = child.activitiesEnrolled[i];
                newChildActivity.childNames = [];
                newChildActivity.childNames.push(child.fullName);
                this.enrolledActivities.push(newChildActivity);
              }
              else {
                //activity found add just the child name
                if (!this.enrolledActivities[index].childNames) {
                  this.enrolledActivities[index].childNames = [];
                }
                this.enrolledActivities[index].childNames.push(child.fullName);
              }
            }
          }

          // this.enrolledActivities.push.apply(this.enrolledActivities, child.activitiesEnrolled);
        });
      });
    // console.log('view will enter my child Page');
  }

  ngOnInit() {
  }

  goToDetails() {
    this.router.navigate(['/details']);
  }

  goToConversation() {
    this.router.navigate(['/conversation']);
  }

  goToActivityDetails(activity) {
    // console.log(activity);
    this.router.navigate(['/activity-details/' + activity.id]);
  }

  goToActivityList() {
    this.router.navigate(['/activity-list']);
  }

  goToAddChild() {
    this.router.navigate(['/child-add/my-child']);
  }

  childSelected(child: Child) {
    //console.log('selected child: ', child);
    this.router.navigate(['/child-modify/' + child.id]);
  }



}
