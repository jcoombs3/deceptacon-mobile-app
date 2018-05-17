import { Component } from '@angular/core';
import { Platform, ViewController, NavParams, ToastController } from 'ionic-angular';

import { StatusBar } from '@ionic-native/status-bar';

// PROVIDERS
import { AssetsService } from '../../providers/assets-service/assets-service';

@Component({
  selector: 'modal-change-profile-pic',
  templateUrl: 'change-profile-pic.html',
  providers: [ AssetsService ]
})
export class ChangeProfilePicModal {
  color: any;
  picture: any;
  
  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public viewCtrl: ViewController, 
    public toastCtrl: ToastController,
    public navParams: NavParams, 
    public assets: AssetsService
  ) {
    this.color = navParams.get('color');
    this.picture = navParams.get('picture');
  }
  
  ionViewWillEnter() {
    if (this.platform.is('cordova')) {
      this.statusBar.styleDefault(); 
    }
  }
  
  ionViewWillLeave() {
    if (this.platform.is('cordova')) {
      this.statusBar.styleLightContent(); 
    }
  }
  
  updatePicture(pic: string) {
    this.picture = pic;
  }
  
  updateColor(color: string) {
    this.color = color;
  }
  
  cancel() {
    this.viewCtrl.dismiss();
  }
  
  save() {
    let toast = this.toastCtrl.create({
      message: 'Profile Picture Updated',
      duration: 2000,
      position: 'top',
      showCloseButton: true
    });
    toast.present();
    this.viewCtrl.dismiss(this);
  } 
}
