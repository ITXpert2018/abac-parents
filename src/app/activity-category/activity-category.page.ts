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
import * as firebase from "firebase";
import { Router } from '@angular/router';
import { AlertMessageService } from '../services/alert-message.service';

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
    private alert: AlertMessageService,
    private route: ActivatedRoute,
    private router: Router,
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

    firebase.database().ref('/childrens/').once('value', (snapshot) => {
      this.myChildren = [];
      snapshot.forEach( snap => {
        if(snap.val().parentId == this.auth.getUid())
          this.myChildren.push( snap.val());
      });
    }); 

    firebase.database().ref('/categories/').once('value', (snapshot) => {
      snapshot.forEach( snap => {
        if(snap.key == this.categoryId){
          this.currentCategory = snap.val().name;
          return;
        }
      });
    });  
  

    firebase.database().ref('/childrens/').once('value', (snapshot) => {
      this.myChildsSchoolIds = [];
      snapshot.forEach( snap => {
        if(snap.val().parentId == this.auth.getUid()){
          this.myChildsSchoolIds.push( snap.val().schoolId);
        }
        
      
      console.log("this.myChildsSchoolIds", this.myChildsSchoolIds);

      });
    });  
    

    firebase.database().ref('/activities/').once('value', (snapshot) => {
      this.activities = [];
      snapshot.forEach( snap => {
        if(snap.val().categoryId == this.categoryId){
          if (this.myChildsSchoolIds.includes(snap.val().schoolId))  
              this.activities.push( snap.val());
        }
      });
    });  

  }

  async enrollToActivityStoreFirebase(child, activity) {
    console.log(child);
    firebase.database().ref('/childrens').child(child.id).update(child);


    const modal = await this.modalCtrl.create({
      component: ThankyouOrderPage,
      componentProps: {
        activity: activity
      }
    });
    return await modal.present();
  }

  async enrollToActivity(activity) {


    if (this.myChildren.length > 0) {
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
      console.log("this.myChildren", childsOnThisSchool);

      if (childsOnThisSchool.length > 0) {
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
                  this.alert.customMessage("Already sign up activity.");

                  // this.router.navigate(['/activity-details/' + activity.id]);
      
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
