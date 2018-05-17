import { Injectable } from '@angular/core';

@Injectable()
export class AssetsService {
  assetsUrl: String = './assets/imgs/';
  
  constructor() {}
  
  // ---------------------- //
  
  getProfileUrl() {
    return this.assetsUrl + 'profile/';
  }
  
  getChangeProfileUrl() {
    return this.assetsUrl + 'change-profile/';
  }
}