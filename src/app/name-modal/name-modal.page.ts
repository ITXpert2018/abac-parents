import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AlertMessageService } from './../services/alert-message.service';
import { Component, OnInit } from '@angular/core';
import { User } from 'src/interfaces';

@Component({
  selector: 'app-name-modal',
  templateUrl: './name-modal.page.html',
  styleUrls: ['./name-modal.page.scss'],
})
export class NameModalPage implements OnInit {
  private newUser: User;
  public fullName: string;
  constructor(
    private alert: AlertMessageService,
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    //get data storage for this user
    this.newUser = {}
    this.storage.get('newUser').then((user) => {
      console.log('user storage in storage:');
      console.log(user);
      this.newUser = user;
      this.fullName = this.newUser.fullName;
    });
  }

  goToPhone() {
    if (this.fullName != '' || this.fullName != undefined) {
      //store info on storage
      this.newUser.fullName = this.fullName;
      this.storage.set('newUser', this.newUser);
      //go to full name page
      this.router.navigate(['/phone-modal']);
    }
    else {
      //alert user
      this.alert.customMessage('Please enter your name!');
    }
  }

}
