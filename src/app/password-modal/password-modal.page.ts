import { Component, OnInit } from '@angular/core';
import { AlertMessageService } from '../services/alert-message.service';
import { LoadingService } from '../services/loading.service';
import { AuthenticationService } from '../services/authentication.service';
import { User } from 'src/interfaces';
import { Storage } from '@ionic/storage';
import { Router } from '@angular/router';

@Component({
  selector: 'app-password-modal',
  templateUrl: './password-modal.page.html',
  styleUrls: ['./password-modal.page.scss'],
})
export class PasswordModalPage implements OnInit {

  password: string;
  private existingUser: User;

  constructor(
    private alert: AlertMessageService,
    private loadingService: LoadingService,
    private auth: AuthenticationService,
    private storage: Storage,
    private router: Router
  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    //if user returns back. remove any written password.
    this.password = '';
    //get data storage for this user
    this.existingUser = {}
    this.storage.get('existingUser').then((user) => {
      this.existingUser = user;
    });
  }

  goToHome() {
    if (this.password == "" || this.password == undefined) {
      this.alert.customMessage("Please enter password!");
    } else {
      this.loadingService.present();
      this.existingUser.password = this.password;
      this.auth.signIn(this.existingUser.email, this.existingUser.password).then((data) => {
        this.router.navigate(['/child']).then(() => {
          if (this.loadingService.isLoading)
            this.loadingService.dismiss();
        })
      }, (err) => {
        if (this.loadingService.isLoading) {
          this.loadingService.dismiss().then(() => {
            this.alert.customMessage(err);
          });
        }

      });
    }
  }
}
