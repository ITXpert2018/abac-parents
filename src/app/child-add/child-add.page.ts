import { Component, OnInit } from '@angular/core';
import { Child, School } from 'src/interfaces';
import { AlertMessageService } from '../services/alert-message.service';
import { AngularFirestore } from '@angular/fire/firestore';
import { AuthenticationService } from '../services/authentication.service';
import { Router, ActivatedRoute } from '@angular/router';
import { LoadingService } from '../services/loading.service';
import { Camera, CameraOptions } from '@ionic-native/camera/ngx';
import { File } from "@ionic-native/file/ngx";

//FIREBASE
import * as firebase from "firebase";
import {AngularFireDatabase} from "@angular/fire/database";

import { toBase64String } from '@angular/compiler/src/output/source_map';
@Component({
  selector: 'app-child-add',
  templateUrl: './child-add.page.html',
  styleUrls: ['./child-add.page.scss'],
})
export class ChildAddPage implements OnInit {

  public child: Child = {};
  public schools: School[];

  returnUrl: string;
  // public glutenButtonColor: string;
  public acceptedAgreement: boolean = false;
  constructor(
    private alert: AlertMessageService,
    private db: AngularFirestore,
    private auth: AuthenticationService,
    public afDatabase: AngularFireDatabase,
    private router: Router,
    private camera: Camera,
    private file: File,
    public loadingService: LoadingService,
    private route: ActivatedRoute
  ) {
    this.child.otherFamilyContact = {};
    this.child.allowedKidGoHomeAlone = false;
    this.child.allowedToMakePhotos = false;
    this.child.allowedToSendNotification = false;
  }

  ngOnInit() {
  }

  schoolSelected(event) {
    console.log(event.detail.value);
    this.child.schoolName = this.schools.find(x => x.id == event.detail.value).name;
  }

  ionViewWillEnter() {
    //default values for child
    this.child.glutenIntolerant = false;
    this.child.aminesIntolerant = false;
    this.child.lactoseIntolerant = false;
    let otherFamilyContactObject = { fullName: '', email: '', phone: '' };
    this.child.otherFamilyContact = otherFamilyContactObject;
    this.returnUrl = this.route.snapshot.params['returnUrl'];

    let school = {
      id: "",
      name:""
    };

    firebase.database().ref('/schools/').once('value', (snapshot) => {
      this.schools = [];
      snapshot.forEach( snap => {
        console.log("snapshot", snap.val());
           school.id = snap.key;
           school.name = snap.val().name;
           console.log("schoool", school);
           this.schools.push(school);
      });
    });
         
    
  }

  glutenSwitch() {
    if (this.child.glutenIntolerant == false) {
      this.child.glutenIntolerant = true;
      //glutenButtonColor =
    }
    else {
      this.child.glutenIntolerant = false;
    }
    //console.log('gluten intolerant ? ', this.child.glutenIntolerant);
  }

  aminesSwitch() {
    if (this.child.aminesIntolerant == false) {
      this.child.aminesIntolerant = true;
      //glutenButtonColor =
    }
    else {
      this.child.aminesIntolerant = false;
    }
    //console.log('gluten intolerant ? ', this.child.glutenIntolerant);
  }

  lactoseSwitch() {
    if (this.child.lactoseIntolerant == false) {
      this.child.lactoseIntolerant = true;
      //glutenButtonColor =
    }
    else {
      this.child.lactoseIntolerant = false;
    }
    //console.log('gluten intolerant ? ', this.child.glutenIntolerant);
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
      alert(downloadUrl);
      this.child.photoUrl = downloadUrl;
      //this.onBlurParentData();
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

  childAdd() {
    if (this.acceptedAgreement) {
      if (this.child.fullName != '' || this.child.fullName != undefined) {
        
        //this.db.collection('parents').doc(this.auth.getUid()).collection('childrens').add(this.child);
        this.child.parentId = this.auth.getUid();
        let key = this.afDatabase.list("childrens").push(this.child).key;
        this.child.id = key;

        firebase.database().ref('/childrens/').child(key).update(this.child);
         this.router.navigate([this.returnUrl]);
      }
      else {
        this.alert.customMessage('Please insert your child\'s name!');
      }
    } else {
      this.alert.customMessage('Please accept agreement!');
    }
  }

}
