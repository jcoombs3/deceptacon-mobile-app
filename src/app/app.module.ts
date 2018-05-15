import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';

// PAGES
import { StyleSheetPage } from '../pages/stylesheet/stylesheet';

// COMPONENTS
import { ProfilePic } from '../components/profile-pic/profile-pic';
import { CircleCell } from '../components/circle-cell/circle-cell';

// PROVIDERS
import { AssetsService } from '../providers/assets-service/assets-service';

@NgModule({
  declarations: [
    MyApp,
    StyleSheetPage,
    
    ProfilePic,
    CircleCell
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    StyleSheetPage,
    
    ProfilePic,
    CircleCell
  ],
  providers: [
    StatusBar,
    SplashScreen,
    AssetsService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
