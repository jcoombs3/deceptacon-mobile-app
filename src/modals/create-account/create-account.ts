import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

@Component({
  selector: 'modal-create-account',
  templateUrl: 'create-account.html'
})
export class CreateAccountModal {
  
  constructor(
    public viewCtrl: ViewController
  ) {}
  
  close() {
    this.viewCtrl.dismiss();
  }
}
