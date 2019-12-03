import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import * as firebase from "firebase";
import { ActivityDetail } from 'src/interfaces';
import {AngularFireDatabase} from "@angular/fire/database";

@Component({
  selector: 'app-activiy-detail-report',
  templateUrl: './activiy-detail-report.page.html',
  styleUrls: ['./activiy-detail-report.page.scss'],
})
export class ActiviyDetailReportPage implements OnInit {
  activityId: string;
  public report: any;
  image: any;

  constructor(
    private route: ActivatedRoute,     
    public afDatabase: AngularFireDatabase,
    ) { }

  ngOnInit() {
  }
  ionViewWillEnter() {
    this.activityId = this.route.snapshot.params['activityId'];
    // console.log(this.afDatabase.list(`activities/${this.activityId}`).valueChanges());

    this.afDatabase.list(`activities/${this.activityId}/detail`).valueChanges().subscribe((datas) => { 
      this.report = datas[2];
    },(err)=>{
       console.log("probleme : ", err)
    });

    this.afDatabase.list(`activities/${this.activityId}`).valueChanges().subscribe((datas) => { 
      console.log(datas);
      this.image = datas[6];
    },(err)=>{
       console.log("probleme : ", err)
    });
    
  }
}
