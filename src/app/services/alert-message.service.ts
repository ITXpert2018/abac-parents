import { Injectable } from '@angular/core';
import { ToastController } from '@ionic/angular';

@Injectable({
  providedIn: 'root'
})
export class AlertMessageService {
  constructor(public toastCtrl: ToastController) {
    console.log('Hello AlertMessageProvider Provider');
  }

  async customMessage(msg: string) {
    const toast = await this.toastCtrl.create({
      message: msg,
      duration: 1000,
      position: 'top'
    });
    toast.present();
  }
}
