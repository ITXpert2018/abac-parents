import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-activiy-detail-photo',
  templateUrl: './activiy-detail-photo.page.html',
  styleUrls: ['./activiy-detail-photo.page.scss'],
})
export class ActiviyDetailPhotoPage implements OnInit {
  activityId: string;
  image: any;
  strPhotofile: any;
  splitArray: [];
  photolist: [];
  constructor(public afDatabase: AngularFireDatabase,
              private route: ActivatedRoute    
    ) { }

  ngOnInit() {
  }

  ionViewWillEnter() {
    this.activityId = this.route.snapshot.params['activityId'];
    // console.log(this.afDatabase.list(`activities/${this.activityId}`).valueChanges());

    this.afDatabase.list(`activities/${this.activityId}`).valueChanges().subscribe((datas) => { 
      console.log(datas);
      this.image = datas[6];
      this.strPhotofile = datas[1];
      // for(let i=0; i<this.splitArray.length; i++){
      //   this.photolist.push(this.splitArray[i]);
      // }
      console.log("photolist", this.strPhotofile.length);
    },(err)=>{
       console.log("probleme : ", err)
    });

    // this.afDatabase.list(`activities/${this.activityId}`).valueChanges().subscribe((datas) => { 
    //   console.log(datas);
    //   this.image = datas[6];
    // },(err)=>{
    //    console.log("probleme : ", err)
    // });
    
  }
}
