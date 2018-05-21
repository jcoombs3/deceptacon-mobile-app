import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

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
    public viewCtrl: ViewController
  ) {}
  
  close() {
    this.viewCtrl.dismiss();
  }
}
