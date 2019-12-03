import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Child } from 'src/interfaces';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';
import * as firebase from "firebase";

@Component({
  selector: 'app-child',
  templateUrl: './child.page.html',
  styleUrls: ['./child.page.scss'],
})
export class ChildPage implements OnInit {
  public childs: Child[];
  public hasChilds: boolean = false;
  constructor(
    private db: AngularFirestore,
    private auth: AuthenticationService,
    private router: Router,
    private storage: Storage
  ) { }

  ionViewWillEnter() {

    firebase.database().ref('/childrens/').once('value', (snapshot) => {
      this.childs = [];
      snapshot.forEach( snap => {
        if(snap.val().parentId == this.auth.getUid()){
          this.hasChilds = true;
          this.childs.push(snap.val());

        }

      });
    });    
    console.log('view will enter child Page');
  }

  goToChildAdd() {
    this.router.navigate(['/child-add/child']);
  }

  detailsPage() {
    //remove new user from storage
    this.storage.remove('newUser');
    this.router.navigate(['/details']);
  }

  ngOnInit() {
  }

}
