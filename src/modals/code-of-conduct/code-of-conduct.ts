import { Component } from '@angular/core';
import { ViewController } from 'ionic-angular';

// PROVIDERS
import { AssetsService } from '../../providers/assets-service/assets-service';

@Component({
  selector: 'modal-code-of-conduct',
  templateUrl: 'code-of-conduct.html',
  providers: [ AssetsService ]
})
export class CodeOfConductModal {
  
  constructor(
    public viewCtrl: ViewController,
    public assets: AssetsService
  ) {}
  
  close() {
    this.viewCtrl.dismiss();
  }
}
