import { Component } from '@angular/core';
import { AlertMessageService } from '../services/alert-message.service';
import { AuthenticationService } from '../services/authentication.service';
import { LoadingService } from '../services/loading.service';
import { Router } from '@angular/router';
import { User } from 'src/interfaces';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  email: any;
  data: any;
  check_data = false;
  constructor(
    public alert: AlertMessageService,
    public authService: AuthenticationService,
    public loadingService: LoadingService,
    public router: Router,
    private storage: Storage
  ) {

  }

  ionViewWillEnter() {
    this.loadingService.present();
    this.authService.user$.subscribe(
      result => {
        //console.log(result);
        // if (this.loadingService.isLoading)
        //   this.loadingService.dismiss();
        if (result) {
          this.storage.get('newUser').then((newUser) => {
            console.log("home page newUser storage get ", newUser);
            if (this.loadingService.isLoading) {
              this.loadingService.dismiss();
            }
            if (newUser != undefined) {
              //do nothing. new user registeration auto login triggered this observable;
            } else {
              //existing user logged in
              this.router.navigate(['/tabs']);
//              this.router.navigate(['/my-child']);
            }
          });
        } else {
          if (this.loadingService.isLoading)
            this.loadingService.dismiss();
        }
      },
      error => {
        console.log("EE:", error);
      }
    );
  }

  checkEmail() {
    if (this.email == "" || this.email == undefined) {
      this.alert.customMessage("Please enter email");
    } else {

      this.loadingService.present().then(() => {
        console.log(this.email);
        this.authService.signIn(this.email, " ").then(res => {
          //if (this.loadingService.isLoading) {
          this.loadingService.dismiss().then(() => {
            console.log('success ', res);
          });
          //}

        }, err => {
          //if (this.loadingService.isLoading) {
          this.loadingService.dismiss().then(() => {
            console.log('error: ', err);
            console.log(err.code);
            console.log(err.message);
            if (err.code == 'auth/user-not-found') {
              //email not found new user to register
              let newUser: User = {};
              newUser.email = this.email;
              this.storage.set('newUser', newUser).then(() => {
                //go to new password
                this.router.navigate(['/password']);
              });

            }
            else if (err.code == 'auth/wrong-password') {
              //email found user to login
              //this.navCtrl.push(PasswordModalPage)
              let existingUser: User = {};
              existingUser.email = this.email;
              this.storage.set('existingUser', existingUser).then(() => {
                this.router.navigate(['/password-modal']);
              });
            }
            else if (err.code == 'auth/invalid-email') {
              this.alert.customMessage("Please enter a valid email address!");
            }
            else {
              this.alert.customMessage(err.message);
            }
          }, err => { console.log("error", err) });
          //}
        });
      });
    }
  }
}
