import { DataShareService } from './../services/data-share.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { Category, Activity, Child } from 'src/interfaces';
import { AngularFirestore } from '@angular/fire/firestore';
import { take } from 'rxjs/operators';
import { AlertMessageService } from '../services/alert-message.service';
import { Observable } from 'rxjs';
import { AuthenticationService } from '../services/authentication.service';
import * as firebase from "firebase";

@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.page.html',
  styleUrls: ['./activity-list.page.scss'],
})
export class ActivityListPage implements OnInit {
  public categories: Category[];
  public imageServerUrl = "http://abacadmin.herokuapp.com/assets/images/";
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
   
    firebase.database().ref('/categories/').once('value', (snapshot) => {
      this.categories = [];
      snapshot.forEach( snap => {
          this.categories.push(snap.val());

      });
    }); 
    


  }

  goToActivityCategory(category: Category) {
    console.log("category", category );
    let categoryId ;
    // if (category.activities.length > 0) {
      firebase.database().ref('/categories/').once('value', (snapshot) => {
        this.categories = [];
        snapshot.forEach( snap => {
          console.log("category", category );
          console.log("snap.val().name", snap.val().name );

          if(snap.val().name == category.name){
            categoryId = snap.key;
            console.log("categoryId", categoryId );
            this.router.navigate(['/activity-category/' + categoryId]);
          }
  
        });
      });   

   //   this.router.navigate(['/activity-category/' + categoryId]);
    // }
    // else {
    //   this.alert.customMessage(category.name + ' has no activities!');
    // }

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
