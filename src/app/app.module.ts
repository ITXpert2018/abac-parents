import { IonicStorageModule } from '@ionic/storage';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { FCM } from '@ionic-native/fcm/ngx';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { environment } from 'src/environments/environment';
import { LoadingService } from './services/loading.service';
import { AlertMessageService } from './services/alert-message.service';
import { AuthenticationService } from './services/authentication.service';
import { Camera } from '@ionic-native/camera/ngx';
import { File } from "@ionic-native/file/ngx";
import { ThankyouOrderPageModule } from './thankyou-order/thankyou-order.module';
import { ChildSelectorPageModule } from './child-selector/child-selector.module';

@NgModule({
  declarations: [
    AppComponent,
    // HomePage,
    // NameModalPage,
    // PhoneModalPage,
    // ChildAddPage,
    // ChildPage,
    // ChildAdd2Page,
    // MyChildPage,
    // ActivityDetailsPage,
    // ActivityListPage,
    // ActivityCategoryPage,
    // ThankyouOrderPage,
    // CreditCardPage,
    // AddCardPage,
    // DetailsPage,
    // NiominasPage,
    // GalleryPage,
    // MenuModalPage,
    // ConversationPage,
    // ReportsPage,
    // ConfigurationPage,
    // PasswordModalPage
  ],
  entryComponents: [],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    IonicStorageModule.forRoot(),
    AppRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    AngularFireAuthModule,
    AngularFireDatabaseModule,
    ThankyouOrderPageModule,
    ChildSelectorPageModule,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    LoadingService,
    AlertMessageService,
    AuthenticationService,
    Camera,
    File,
    FCM,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
