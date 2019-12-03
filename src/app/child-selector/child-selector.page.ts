import { AuthenticationService } from './../services/authentication.service';
import { Component, OnInit } from '@angular/core';
import { Child, Activity } from 'src/interfaces';
import { ModalController, NavParams } from '@ionic/angular';
import { DataShareService } from '../services/data-share.service';
import { AngularFirestore } from '@angular/fire/firestore';
import * as firebase from "firebase";

@Component({
  selector: 'app-child-selector',
  templateUrl: './child-selector.page.html',
  styleUrls: ['./child-selector.page.scss'],
})
export class ChildSelectorPage implements OnInit {
  activity: Activity;
  public childrens: Child[];
  constructor(
    private modalController: ModalController,
    private dataShare: DataShareService,
    private navParams: NavParams,
    private db: AngularFirestore,
    private auth: AuthenticationService,
  ) { }

  ngOnInit() {
    console.log('on init child selector modal');
  }

  ionViewWillEnter() {
    this.childrens = [];
    this.activity = this.navParams.get('activity');
    console.log('ion view will eneter child selector modal')
    // console.log('current activity ', this.activity);
    //this.childrens = this.dataShare.getMyChilds();
    // this.db.collection('parents').doc(this.auth.getUid()).collection('childrens').snapshotChanges().subscribe(
    //   serverItems => {
    //     serverItems.forEach(item => {
    //       // console.log('browsing children of this parent, got this child: ', item);
    //       let child: Child = item.payload.doc.data();
    //       child.id = item.payload.doc.id;
    //       if (child.schoolId == this.activity.schoolId) {
    //         this.childrens.push(child);
    //       }
    //       //this.myChildsSchoolIds.push(child.schoolId);
    //       // this.myChildren.push(child);
    //     })
    //   });

    firebase.database().ref('/childrens/').once('value', (snapshot) => {
      this.childrens = [];
      snapshot.forEach( snap => {
        if(snap.val().parentId == this.auth.getUid())
        if (snap.val().schoolId == this.activity.schoolId) {
          this.childrens.push( snap.val());

        }
      });
    });

    //   this.dataShare.getMyChilds().forEach(child => {
    //   console.log('got from data share this child', child);
    //   if (child.schoolId == this.activity.schoolId) {
    //     //check if already enrolled
    //     // if (child.activitiesEnrolled) {
    //     //   let alreadyEnrolled = false;
    //     //   child.activitiesEnrolled.forEach(enrolledActivity => {
    //     //     if (enrolledActivity.id == this.activity.id) {
    //     //       alreadyEnrolled = true;
    //     //     }
    //     //   })

    //     //   if (!alreadyEnrolled) {
    //     //     this.childrens.push(child);
    //     //   }

    //     // }
    //     // else {
    //     //   this.childrens.push(child);
    //     // }
    //     this.childrens.push(child);
    //   }
    // })

    //console.log(this.childrens);
  }

  public childSelected(child: Child) {
    this.modalController.dismiss(child);
  }

  cancel() {
    this.modalController.dismiss('cancel');
  }
}
