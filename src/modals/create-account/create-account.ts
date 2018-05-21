import { Component } from '@angular/core';
import { ViewController, ModalController } from 'ionic-angular';

// MODALS
import { ChangeProfilePicModal } from '../change-profile-pic/change-profile-pic';

@Component({
  selector: 'modal-create-account',
  templateUrl: 'create-account.html'
})
export class CreateAccountModal {
  villager: any = {
    firstname: '',
    lastname: '',
    username: '',
    picture: "Werewolf.png",
    color: "orange"
  };
  
  constructor(
    public viewCtrl: ViewController,
    public modalCtrl: ModalController
  ) {}
  
  close() {
    this.viewCtrl.dismiss();
  }
  
  changeProfilePic(villager) {
    const changeProfilePicModal = this.modalCtrl.create(ChangeProfilePicModal, this.villager);
    changeProfilePicModal.onWillDismiss(data => {
      if (data) {
        this.villager.picture = data.picture;
        this.villager.color = data.color;
      }
    });
    changeProfilePicModal.present();
  }
}
