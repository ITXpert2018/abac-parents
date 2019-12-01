import { Child } from './../../interfaces';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { ThankyouOrderPage } from '../thankyou-order/thankyou-order.page';
import { Activity, Category } from 'src/interfaces';
import * as moment from 'moment';
import { DataShareService } from '../services/data-share.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { AuthenticationService } from '../services/authentication.service';
import { ChildSelectorPage } from '../child-selector/child-selector.page';

@Component({
  selector: 'app-activity-category',
  templateUrl: './activity-category.page.html',
  styleUrls: ['./activity-category.page.scss'],
})
export class ActivityCategoryPage implements OnInit {
  categoryId: string;
  currentCategory: Category = {};
  private myChildsSchoolIds: string[];
  private myChildren: Child[];

  activities: Activity[] = [];
  public momentjs: any = moment;
  constructor(
    private route: ActivatedRoute,
    private modalCtrl: ModalController,
    private dataShare: DataShareService,
    private db: AngularFirestore,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    //read category name
    this.categoryId = this.route.snapshot.params['categoryId'];
    //category name is also attribute of activity. it will depend school by school.
    // var newActivity: Activity = {};
    // // newActivity.categoryName = 'Esportives';
    // newActivity.name = 'Football';
    // newActivity.description = 'Lorem ipsum dolor sit amet, consectetur ading elit, sed do eiusmod tempor incididunt utsam labore et dolore magna aliqua';
    // newActivity.image = "/assets/imgs/football.jpg";
    // // newActivity.image = "https://www.telegraph.co.uk/content/dam/football/2019/08/15/TELEMMGLPICT000206110274_trans_NvBQzQNjv4BqrS8Z1b0ZQjNoViJZ3HnGQ4NS1YurETCFkeLSh1IwB7c.jpeg?imwidth=450";
    // newActivity.price = 2.5;
    // newActivity.start_date = new Date(2019, 8, 26);
    // newActivity.end_date = new Date(2019, 8, 30);
    // newActivity.duration_hrs = 3;
    // this.activities.push(newActivity);

    this.myChildsSchoolIds = [];
    this.myChildren = [];
    // this.dataShare.getMyChilds().forEach(child => {
    //   this.myChildsSchoolIds.push(child.schoolId);
    // });
    this.db.collection('parents').doc(this.auth.getUid()).collection('childrens').snapshotChanges().subscribe(
      serverItems => {
        serverItems.forEach(item => {
          // console.log('browsing children of this parent, got this child: ', item);
          let child: Child = item.payload.doc.data();
          child.id = item.payload.doc.id;
          this.myChildsSchoolIds.push(child.schoolId);
          this.myChildren.push(child);
        })
      });

    this.db.collection('categories').doc(this.categoryId).valueChanges().pipe(take(1))
      .subscribe(data => {
        this.currentCategory = data;
      });


    // this.db.collection('categories').doc(this.categoryId).collection('activities').snapshotChanges().pipe(take(1)).subscribe(serverItems => {
    //   serverItems.forEach(a => {
    //     //this.hasChilds = true;
    //     let activity: Activity = a.payload.doc.data();
    //     activity.id = a.payload.doc.id;
    //     // console.log(category);
    //     if (this.myChildsSchoolIds.includes(activity.schoolId))
    //       this.activities.push(activity);
    //   });
    // }, error => { console.log(error) }
    //   , () => {
    //     //finished
    //     //subscription complete.
    //   });
    this.db.collection('activities', q => q.where('categoryId', '==', this.categoryId)).snapshotChanges().subscribe(
      serverItems => {
        serverItems.forEach(a => {
          let activity: Activity = a.payload.doc.data();
          activity.id = a.payload.doc.id;
          // console.log(category);
          if (this.myChildsSchoolIds.includes(activity.schoolId))
            this.activities.push(activity);
        });
      }
    );

  }

  async enrollToActivityStoreFirebase(child, activity) {
    this.db.collection('parents').doc(this.auth.getUid()).collection('childrens').doc(child.id).set({
      activitiesEnrolled: child.activitiesEnrolled
    }, { merge: true });

    const modal = await this.modalCtrl.create({
      component: ThankyouOrderPage,
      componentProps: {
        activity: activity
      }
    });
    return await modal.present();
  }

  async enrollToActivity(activity) {

    if (this.myChildren.length > 1) {
      //check if have more than one child on this activity school.
      // activity.schoolId
      let childsOnThisSchool: Child[] = [];
      let child: Child;
      this.myChildren.forEach(child => {
        // this.myChildsSchoolIds.push(child.schoolId)
        if (child.schoolId == activity.schoolId) {
          childsOnThisSchool.push(child);
        }
      });

      var shouldUpdateToFirebase = false;

      if (childsOnThisSchool.length > 1) {
        //TO DO select one of the kids
        const modal = await this.modalCtrl.create({
          component: ChildSelectorPage,
          componentProps: {
            activity: activity
          },
        });

        modal.onDidDismiss()
          .then((data) => {
            const returnData = data['data'];
            // console.log(returnData);
            if (returnData != 'cancel') {
              let childReturned: Child;
              let shouldUpdatToFirebase2 = false;
              childReturned = returnData;
              if (childReturned.activitiesEnrolled == undefined) {
                //child has no previous activities enrolled.
                childReturned.activitiesEnrolled = [];
                childReturned.activitiesEnrolled.push(activity);
                shouldUpdatToFirebase2 = true;

              }
              else {
                //child has already some enrolled activities.
                //check if this activity is already enrolled
                var found = false;
                for (var i = 0; i < childReturned.activitiesEnrolled.length; i++) {
                  if (childReturned.activitiesEnrolled[i].id == activity.id) {
                    found = true;
                    break;
                  }
                }
                if (!found) {
                  childReturned.activitiesEnrolled.push(activity);
                  shouldUpdatToFirebase2 = true;
                }
                else {
                  shouldUpdatToFirebase2 = false;
                  console.log('child already enrolled to this activity.', childReturned.activitiesEnrolled);
                }
              }

              if (shouldUpdatToFirebase2) {
                // this.db.collection('parents').doc(this.auth.getUid()).collection('childrens').doc(child.id).set({
                //   activitiesEnrolled: child.activitiesEnrolled
                // }, { merge: true });

                // const modal = await this.modalCtrl.create({
                //   component: ThankyouOrderPage
                // });
                // return await modal.present();
                this.enrollToActivityStoreFirebase(childReturned, activity);

              }

            }
          });

        await modal.present();
      }
      else {
        //enroll the child on this school to this activity if not already enrolled
        child = childsOnThisSchool[0];
        if (child.activitiesEnrolled == undefined) {
          //child has no previous activities enrolled.
          child.activitiesEnrolled = [];
          child.activitiesEnrolled.push(activity);
          shouldUpdateToFirebase = true;

        }
        else {
          //child has already some enrolled activities.
          //check if this activity is already enrolled
          var found = false;
          for (var i = 0; i < child.activitiesEnrolled.length; i++) {
            if (child.activitiesEnrolled[i].id == activity.id) {
              found = true;
              break;
            }
          }
          if (!found) {
            child.activitiesEnrolled.push(activity);
            shouldUpdateToFirebase = true;
          }
          else {
            shouldUpdateToFirebase = false;
            console.log('child already enrolled to this activity.', child.activitiesEnrolled);
          }
        }

      }

      if (shouldUpdateToFirebase) {
        // this.db.collection('parents').doc(this.auth.getUid()).collection('childrens').doc(child.id).set({
        //   activitiesEnrolled: child.activitiesEnrolled
        // }, { merge: true });

        // const modal = await this.modalCtrl.create({
        //   component: ThankyouOrderPage
        // });
        // return await modal.present();
        await this.enrollToActivityStoreFirebase(child, activity);

      }
    }

  }

}
