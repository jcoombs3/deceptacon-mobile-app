import { Component, Input } from '@angular/core';

// PROVIDERS
import { AssetsService } from '../../providers/assets-service/assets-service';

@Component({
  selector: 'profile-pic',
  providers: [AssetsService],
  templateUrl: 'profile-pic.html'
})
export class ProfilePic {
  @Input() picture: String;
  @Input() color: String;
  
  constructor(private assets: AssetsService) { }
}