import { DataShareService } from './../services/data-share.service';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticationService } from '../services/authentication.service';
import { Child, ChildActivity } from 'src/interfaces';
import * as moment from 'moment';
import { take } from 'rxjs/operators';
import * as firebase from "firebase";

@Component({
  selector: 'app-my-child',
  templateUrl: './my-child.page.html',
  styleUrls: ['./my-child.page.scss'],
})
export class MyChildPage implements OnInit {
  public childs: Child[];
  public enrolledActivities: ChildActivity[];
  public momentjs: any = moment;
  activiyDetail:  [];

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

    firebase.database().ref('/childrens/').once('value', (snapshot) => {
      this.childs = [];
      snapshot.forEach( snap => {
        if(snap.val().parentId == this.auth.getUid()){
          this.childs.push(snap.val());
          console.log(this.childs);
        }
      });
    });    
    

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
