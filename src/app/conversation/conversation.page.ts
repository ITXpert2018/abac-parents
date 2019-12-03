import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { User, Message } from 'src/interfaces';
import {AngularFireDatabase} from "@angular/fire/database";

import * as firebase from "firebase";



@Component({
  selector: 'app-conversation',
  templateUrl: './conversation.page.html',
  styleUrls: ['./conversation.page.scss'],
})
export class ConversationPage implements OnInit {

  parent: User = {};
  messages: Message[] = [];
  public inp_text: string = '';
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private auth: AuthenticationService,
    public afDatabase: AngularFireDatabase,
    private db: AngularFirestore,
  ) {
  }

  ionViewWillEnter() {
    this.inp_text = '';

    firebase.database().ref('/parents/').once('value', (snapshot) => {
      snapshot.forEach( snap => {
        if(snap.val().parentId == this.auth.getUid())
          this.parent = snap.val();
      });
    }); 


    // //get all messages
    // this.db.collection('parents').doc(this.auth.getUid())
    // .collection('messages', q => q.orderBy('timestamp', 'asc'))
    // .snapshotChanges().subscribe(
    //   serverItems => {
    //     this.messages = [];
    //     serverItems.forEach(item => {
    //       console.log(item);
    //       let message: Message = item.payload.doc.data();
    //       message.id = item.payload.doc.id;
    //       console.log(message);
    //       this.messages.push(message);

    //     });
    //   });
    
      // var newMessage = this.activatedRoute.snapshot.params['data'].message;
      // this.messages.push(newMessage);
  }

  sendMsg() {
    console.log(this.inp_text);
    let newMessage: Message = {};
    newMessage.text = this.inp_text;
    newMessage.timestamp = new Date().toISOString();
    newMessage.senderUid = this.parent.uid;
    // this.db.collection('parents').doc(this.auth.getUid())
    // .collection('messages').add(newMessage);
    // this.inp_text = '';
  }

  ngOnInit() {
  }

  goToDetails() {
    this.router.navigate(['/details']);
  }

  goToMyChild() {
    this.router.navigate(['/my-child']);
  }

  goToActivityList() {
    this.router.navigate(['/activity-list']);
  }

}
