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
@Component({
  selector: 'app-child-modify',
  templateUrl: './child-modify.page.html',
  styleUrls: ['./child-modify.page.scss'],
})
export class ChildModifyPage implements OnInit {
  public child: Child = {};
  public schools: School[];
  childId: string;
  // public glutenButtonColor: string;
  public acceptedAgreement: boolean = true;
  constructor(
    private alert: AlertMessageService,
    private db: AngularFirestore,
    private auth: AuthenticationService,
    private router: Router,
    private camera: Camera,
    private file: File,
    public loadingService: LoadingService,
    private route: ActivatedRoute
  ) {
    this.child.otherFamilyContact = {};
  }

  ngOnInit() {
  }

  schoolSelected(event) {
    console.log(event.detail.value);
    this.child.schoolName = this.schools.find(x => x.id == event.detail.value).name;
  }

  ionViewWillEnter() {
    //default values for child
    //this.loadingService.present();

    //this.child.otherFamilyContact = otherFamilyContactObject;
    this.child.glutenIntolerant = false;
    this.child.aminesIntolerant = false;
    this.child.lactoseIntolerant = false;
    this.childId = this.route.snapshot.params['childId'];
    this.db.collection('parents').doc(this.auth.getUid()).collection('childrens').doc(this.childId).valueChanges().subscribe(data => {
      // console.log(data);
      this.child = data;
      if (this.child.otherFamilyContact == undefined) {
        let otherFamilyContactObject = { fullName: '', email: '', phone: '' };
        this.child.otherFamilyContact = otherFamilyContactObject;
      }

    });



    //find all schools
    this.db.collection('schools').snapshotChanges().subscribe(
      serverItems => {
        this.schools = [];

        serverItems.forEach(item => {
          let school: School = item.payload.doc.data();
          school.id = item.payload.doc.id;
          console.log('this school', school);
          this.schools.push(school);


        });
      }
    );
    // if (this.loadingService.isLoading) {
    //   this.loadingService.dismiss();
    // }
    // console.log(this.schools);

    // this.db.collection('places').doc(this.placeId).valueChanges().pipe(take(1))
    //   .subscribe(data => {
    //     this.currentPlace = data;
    //   });

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

  childModify() {
    if (this.acceptedAgreement) {
      if (this.child.fullName != '' || this.child.fullName != undefined) {
        this.db.collection('parents').doc(this.auth.getUid()).collection('childrens').doc(this.childId).set(this.child, { merge: true });
        this.router.navigate(['/my-child']);
      }
      else {
        this.alert.customMessage('Please insert your child\'s name!');
      }
    } else {
      this.alert.customMessage('Please accept agreement!');
    }
  }
}
