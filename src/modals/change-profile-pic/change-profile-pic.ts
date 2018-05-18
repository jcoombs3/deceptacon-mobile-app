import { Component, ViewChild } from '@angular/core';
import { Platform, ViewController, NavParams, Slides, ToastController } from 'ionic-angular';

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
    public viewCtrl: ViewController, 
    public toastCtrl: ToastController,
    public navParams: NavParams, 
    public assets: AssetsService
  ) {
    this.color = navParams.get('color');
    this.picture = navParams.get('picture');
  }
  
  ionViewWillEnter() {
    this.slideTo(1, 0);
  }
  
  slideTo(idx, animTime) {
    this.slides.lockSwipes(false);
    this.slides.slideTo(idx, animTime, null);
    this.slides.lockSwipes(true);
  }
  
  cancel() {
    switch(this.slides.getActiveIndex()) {
      case 1: 
        this.viewCtrl.dismiss();
        break;
      default: 
        this.slideTo(1, 300);
    }
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
  
  changeAvatar() {
    this.slideTo(0, 300);
  }
  
  selectAvatar(picture) {
    this.picture = picture;
    this.slideTo(1, 300);
  }
  
  changeAvatarColor() {
    let toast = this.toastCtrl.create({
      message: 'TODO: changeAvatarColor()',
      duration: 2000,
      position: 'top',
      cssClass: 'error'
    });
    toast.present();
    console.log('++ changeAvatarColor');
  }
  
  selectAvatarColor() {
    console.log('++ selectAvatarColor');
  }
  
  changeBgColor() {
    this.slideTo(2, 300);
  }
  
  setBgColor(color) {
    this.color = color;
    this.slideTo(1, 300);
  }
}
