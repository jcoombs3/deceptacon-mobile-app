import { Component, ViewChild } from '@angular/core';
import { Platform, ViewController, NavParams, Slides } from 'ionic-angular';

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
  showChangeAvatarColor: boolean = false;
  @ViewChild(Slides) slides: Slides;
  
  constructor(
    public platform: Platform,
    public viewCtrl: ViewController, 
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
    if (!this.showChangeAvatarColor) {
      switch(this.slides.getActiveIndex()) {
        case 1: 
          this.viewCtrl.dismiss();
          break;
        default: 
          this.slideTo(1, 300);
      }
    } else {
      this.showChangeAvatarColor = false;
    }
  }
  
  save() {
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
    this.showChangeAvatarColor = true;
  }
  
  selectAvatarColor(picture) {
    this.picture = picture;
    this.showChangeAvatarColor = false;
  }
  
  changeBgColor() {
    this.slideTo(2, 300);
  }
  
  setBgColor(color) {
    this.color = color;
    this.slideTo(1, 300);
  }
}
