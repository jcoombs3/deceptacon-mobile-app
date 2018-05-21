import { Component } from '@angular/core';
import { NavController, ModalController } from 'ionic-angular';

// MODALS
import { CreateAccountModal } from '../../modals/create-account/create-account';
import { ChangeProfilePicModal } from '../../modals/change-profile-pic/change-profile-pic';
import { CodeOfConductModal } from '../../modals/code-of-conduct/code-of-conduct';

@Component({
  selector: 'page-stylesheet',
  templateUrl: 'stylesheet.html'
})
export class StyleSheetPage {
  user: any = {
    color: 'orange',
    picture: 'Werewolf.png'
  };

  constructor(
    public navCtrl: NavController,
    public modalCtrl: ModalController
  ) {

  }
  
  openCreateAccount() {
    const createAccountModal = this.modalCtrl.create(CreateAccountModal);
    createAccountModal.present();
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
  
  openCodeOfConduct() {
    const codeOfConductModal = this.modalCtrl.create(CodeOfConductModal);
    codeOfConductModal.present();
  }

}
