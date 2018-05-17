import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

// MODALS
import { ChangeProfilePicModal } from '../../modals/change-profile-pic/change-profile-pic';

@Component({
  selector: 'page-stylesheet',
  templateUrl: 'stylesheet.html'
})
export class StyleSheetPage {
  user: any = {
    color: 'green',
    picture: 'Witch.png'
  };

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {

  }
  
  openChangeProfilePic() {
    const changeProfilePicModal = this.modalCtrl.create(ChangeProfilePicModal, this.user);
    changeProfilePicModal.onWillDismiss(data => {
      if (data) {
        this.user.color = data.color;
        this.user.picture = data.picture;
      }
    });
    changeProfilePicModal.present();
  }

}
