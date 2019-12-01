import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage';
import { AlertMessageService } from '../services/alert-message.service';
import { Router } from '@angular/router';
import { User } from 'src/interfaces';
import { AuthenticationService } from '../services/authentication.service';
import { LoadingService } from '../services/loading.service';

@Component({
  selector: 'app-phone-modal',
  templateUrl: './phone-modal.page.html',
  styleUrls: ['./phone-modal.page.scss'],
})
export class PhoneModalPage implements OnInit {

  private newUser: User;
  public phone: string;
  constructor(
    private storage: Storage,
    private alert: AlertMessageService,
    private router: Router,
    private auth: AuthenticationService,
    private loadingService: LoadingService) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    //get data storage for this user
    this.newUser = {}
    this.storage.get('newUser').then((user) => {
      console.log('user storage in storage:');
      console.log(user);
      this.newUser = user;
      this.phone = this.newUser.phone;
    });
  }

  goToChildsPage() {
    if (this.phone != '' || this.phone != undefined) {
      //store info on storage
      this.loadingService.present();
      this.newUser.phone = this.phone;
      this.storage.set('newUser', this.newUser);
      this.auth.register(this.newUser).then(() => {
        // this.router.navigate(['/child']).then(() => {
        //   if (this.loadingService.isLoading)
        //     this.loadingService.dismiss();
        // })
        this.router.navigate(['/child']);
      });

    }
    else {
      //alert user
      this.alert.customMessage('Please enter your phone number!');
    }
  }

}
