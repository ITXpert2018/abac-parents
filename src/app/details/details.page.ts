import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { User } from 'src/interfaces';
import { take } from 'rxjs/operators';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from "@ionic-native/file/ngx";

//FIREBASE
import * as firebase from "firebase";
import { AlertMessageService } from '../services/alert-message.service';
import { LoadingService } from '../services/loading.service';
import { Router } from '@angular/router';
import {AngularFireDatabase} from "@angular/fire/database";


@Component({
  selector: 'app-details',
  templateUrl: './details.page.html',
  styleUrls: ['./details.page.scss'],
})
export class DetailsPage implements OnInit {
  public parent: User = {};
  public parentAutokey: any;
  public urlToImage: string = "";
  constructor(
    private auth: AuthenticationService,
    private db: AngularFirestore,
    private camera: Camera,
    private file: File,
    public alert: AlertMessageService,
    public loadingService: LoadingService,
    public router: Router,
    public afDatabase: AngularFireDatabase


  ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    //get info of current parent from firebase
    //this.urlToImage = "../../assets/imgs/kids-1.png";

    firebase.database().ref('/parents/').once('value', (snapshot) => {
      snapshot.forEach( snap => {
        if(snap.val().uid == this.auth.getUid()){
          this.parent = snap.val();
          this.parentAutokey = snap.key;
          if (this.parent.photoUrl == '' || this.parent.photoUrl == undefined) {
            this.parent.photoUrl = this.urlToImage;
          }
          return;
        }
      });
    });    
    
    // this.db.collection('parents').doc(this.auth.getUid()).valueChanges().subscribe(data => {
    //   //console.log(data);
    //   this.parent = data;
    //   //console.log(this.parent.photoUrl);
    //   if (this.parent.photoUrl == '' || this.parent.photoUrl == undefined) {
    //     this.parent.photoUrl = this.urlToImage;
    //   }
    // });


  }

  onBlurParentData() {
    console.log("this.paremt", this.parent);
    firebase.database().ref('/parents').child(this.parentAutokey).update(this.parent);
    //this.db.collection('parents').doc(this.auth.getUid()).update(this.parent);
  }

  async uploadPhoto() {
    const options: CameraOptions = {
      quality: 80,
      destinationType: this.camera.DestinationType.FILE_URI,
      encodingType: this.camera.EncodingType.JPEG,
      mediaType: this.camera.MediaType.PICTURE
    };

    try {
      this.loadingService.present();
      let cameraInfo = await this.camera.getPicture(options);
      let blobInfo = await this.makeFileIntoBlob(cameraInfo);
      let downloadUrl: any = await this.uploadToFirebase(blobInfo);
      console.log(downloadUrl);
      this.parent.photoUrl = downloadUrl;
      this.onBlurParentData();
      if (this.loadingService.isLoading)
        this.loadingService.dismiss();
    } catch (e) {
      if (this.loadingService.isLoading)
        this.loadingService.dismiss();
      console.log(e.message);
      this.alert.customMessage("File Upload Error " + e.message);
    }
  }

  // FILE STUFF
  makeFileIntoBlob(_imagePath) {
    // INSTALL PLUGIN - cordova plugin add cordova-plugin-file
    return new Promise((resolve, reject) => {
      let fileName = "";
      this.file
        .resolveLocalFilesystemUrl(_imagePath)
        .then(fileEntry => {
          let { name, nativeURL } = fileEntry;

          // get the path..
          let path = nativeURL.substring(0, nativeURL.lastIndexOf("/"));
          console.log("path", path);
          console.log("fileName", name);

          fileName = name;

          // we are provided the name, so now read the file into
          // a buffer
          return this.file.readAsArrayBuffer(path, name);
        })
        .then(buffer => {
          // get the buffer and make a blob to be saved
          let imgBlob = new Blob([buffer], {
            type: "image/jpeg"
          });
          console.log(imgBlob.type, imgBlob.size);
          resolve({
            fileName,
            imgBlob
          });
        })
        .catch(e => reject(e));
    });
  }

  /**
 *
 * @param _imageBlobInfo
 */
  uploadToFirebase(_imageBlobInfo) {
    console.log("uploadToFirebase");
    return new Promise((resolve, reject) => {
      let fileRef = firebase.storage().ref("parentsApp/" + this.auth.getUid() + "/" + _imageBlobInfo.fileName);

      let uploadTask = fileRef.put(_imageBlobInfo.imgBlob);

      uploadTask.on(
        "state_changed",
        (_snapshot: any) => {
          console.log(
            "snapshot progess " +
            (_snapshot.bytesTransferred / _snapshot.totalBytes) * 100
          );
        },
        _error => {
          console.log(_error);
          reject(_error);
        },
        () => {
          // completion...
          resolve(fileRef.getDownloadURL());
        }
      );
    });
  }

  gotoCreditCard() {
    this.router.navigate(['/credit-card']);
  }

  gotoTicket() {
    this.router.navigate(['/nominas']);
  }

  goToMyChild() {
    this.router.navigate(['/my-child']);
  }

  goToActivityList() {
    this.router.navigate(['/activity-list']);
  }

  goToConversation() {
    this.router.navigate(['/conversation']);
  }




  logOut() {
    this.auth.signOut();
  }
}
