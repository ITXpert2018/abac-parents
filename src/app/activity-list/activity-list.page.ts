import { DataShareService } from './../services/data-share.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Category, Activity, Child } from 'src/interfaces';
import { AngularFirestore } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { AlertMessageService } from '../services/alert-message.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.page.html',
  styleUrls: ['./activity-list.page.scss'],
})
export class ActivityListPage implements OnInit {
  public categories: Category[];
  allActivities: Activity[];
  private myChildsSchoolIds: string[];
  constructor(
    private router: Router,
    private dataShare: DataShareService,
    private db: AngularFirestore,
    private alert: AlertMessageService,
    private auth: AuthenticationService,
  ) {

  }

  ngOnInit() {
  }

  ionViewWillEnter() {
    //console.log(this.dataShare.getMyChilds());
    this.myChildsSchoolIds = [];
    this.db.collection('parents').doc(this.auth.getUid()).collection('childrens').snapshotChanges().subscribe(
      serverItems => {
        serverItems.forEach(item => {
          // console.log('browsing children of this parent, got this child: ', item);
          let child: Child = item.payload.doc.data();
          child.id = item.payload.doc.id;
          this.myChildsSchoolIds.push(child.schoolId);
          // this.myChildren.push(child);
        })
      });

    //find all activities
    this.allActivities = [];
    this.db.collection('activities').snapshotChanges().subscribe(serverItems => {
      serverItems.forEach(a => {
        let activity: Activity = a.payload.doc.data();
        activity.id = a.payload.doc.id;
        this.allActivities.push(activity);
      })
    });

    //find all categories
    this.categories = [];
    //subscribe to categories
    this.db.collection('categories', q => q.orderBy('name', 'asc')).snapshotChanges().pipe(take(1)).subscribe(serverItems => {
      serverItems.forEach(a => {
        //this.hasChilds = true;
        let category: Category = a.payload.doc.data();
        category.id = a.payload.doc.id;
        category.activities = [];
        // console.log(category);
        this.categories.push(category);
      });
    }, error => { console.log(error) }
      , () => {
        //finished
        //got all categories.
        //get activity for category.
        this.categories.forEach(category => {
          // this.db.collection('categories').doc(element.id).collection('activities').snapshotChanges().pipe(take(1)).subscribe(serverItems => {
          //   serverItems.forEach(activityItem => {
          //     // console.log(item.payload.doc.id);
          //     let activity: Activity = activityItem.payload.doc.data();
          //     activity.id = activityItem.payload.doc.id;

          //     //check if this activity is offered by my childrens schools

          //     if (this.myChildsSchoolIds.includes(activity.schoolId))
          //       element.activities.push(activity);
          //   }
          //   )
          // },
          //   error => { console.log(error) },
          //   () => {
          //     //on complete subscription
          //     // console.log('subscription complete for activities for category ', element);

          //   });
          this.allActivities.forEach(activity => {
            if (activity.categoryId == category.id) {
              category.activities.push(activity);
            }
          });

        });
        // console.log(this.categories);
      });
  }

  goToActivityCategory(category: Category) {
    if (category.activities.length > 0) {
      this.router.navigate(['/activity-category/' + category.id]);
    }
    else {
      this.alert.customMessage(category.name + ' has no activities!');
    }

  }

  goToDetails() {
    this.router.navigate(['/details']);
  }

  goToMyChild() {
    this.router.navigate(['/my-child']);
  }

  goToConversation() {
    this.router.navigate(['/conversation']);
  }

}
