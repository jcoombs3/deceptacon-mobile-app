import { Component, ViewChild } from '@angular/core';
import { Platform, ViewController, NavParams, Slides, ToastController } from 'ionic-angular';

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
  @ViewChild(Slides) slides: Slides;
  
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
    this.slides.slideTo(1, 0, null);
    if (this.platform.is('cordova')) {
      this.statusBar.styleDefault(); 
    }
  }
  
  ionViewWillLeave() {
    if (this.platform.is('cordova')) {
      this.statusBar.styleLightContent(); 
    }
  }
  
  cancel() {
    this.viewCtrl.dismiss();
  }
  
  save() {
    console.warn('')
    let toast = this.toastCtrl.create({
      message: 'Profile Picture Updated',
      duration: 2000,
      position: 'top',
      showCloseButton: true
    });
    toast.present();
    this.viewCtrl.dismiss(this);
  } 
  
  changeAvatar() {
    this.slides.slideTo(0, 300, null);
  }
  
  selectAvatar(picture) {
    this.picture = picture;
    this.slides.slideTo(1, 300, null);
  }
  
  changeAvatarColor() {
    console.log('++ changeAvatarColor');
  }
  
  selectAvatarColor() {
    console.log('++ selectAvatarColor');
  }
  
  changeBgColor() {
    this.slides.slideTo(2, 300, null);
  }
  
  setBgColor(color) {
    this.color = color;
    this.slides.slideTo(1, 300, null);
  }
}
