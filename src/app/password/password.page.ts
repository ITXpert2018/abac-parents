import { User } from './../../interfaces';
import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from '../services/alert-message.service';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';
import { AuthenticationService } from '../services/authentication.service';

@Component({
  selector: 'app-password',
  templateUrl: './password.page.html',
  styleUrls: ['./password.page.scss'],
})
export class PasswordPage implements OnInit {

  public password: string;
  public confirmPassword: string;
  private errorMessage: string;
  private newUser: User;
  constructor(
    private alert: AlertMessageService,
    private storage: Storage,
    private router: Router,
    private auth: AuthenticationService
  ) { }

  ngOnInit() {

  }

  ionViewWillEnter() {
    //if user returns back. remove any written password.
    this.password = '';
    this.confirmPassword = '';
    //get data storage for this user
    this.newUser = {}
    this.storage.get('newUser').then((user) => {
      console.log('user storage in storage:');
      console.log(user);
      this.newUser = user;
    });
  }

  isPasswordPolicyMet() {
    if (this.password.length < 8) {
      this.errorMessage = "The minimum password length is 8 characters!"
      return false;
    }
    this.errorMessage = '';
    return true;
  }

  isPasswordConfirmed() {
    this.errorMessage = "Password doesn't match!";
    if (this.password == '' || this.password == undefined)
      return false
    if (this.confirmPassword == '' || this.password == undefined)
      return false
    if (this.confirmPassword != this.password) {
      return false
    }

    this.errorMessage = '';
    return true;
  }

  goToName() {
    if (this.isPasswordPolicyMet() && this.isPasswordConfirmed()) {
      //store info on storage
      this.newUser.password = this.password;
      this.storage.set('newUser', this.newUser);
      //go to full name page
      this.router.navigate(['/name-modal']);


    }
    else {
      //alert user
      this.alert.customMessage(this.errorMessage);
    }
  }

}
