import { AngularFirestore } from '@angular/fire/firestore';
import { Component, OnInit } from '@angular/core';
import { AuthenticationService } from '../services/authentication.service';
import { Child } from 'src/interfaces';
import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Component({
  selector: 'app-child',
  templateUrl: './child.page.html',
  styleUrls: ['./child.page.scss'],
})
export class ChildPage implements OnInit {
  public childs: Child[];
  public hasChilds: boolean = false;
  constructor(
    private db: AngularFirestore,
    private auth: AuthenticationService,
    private router: Router,
    private storage: Storage
  ) { }

  ionViewWillEnter() {

    //subscribe to places collection
    this.db.collection('parents').doc(this.auth.getUid()).collection('childrens')
      .snapshotChanges().subscribe(serverItems => {
        this.childs = [];
        serverItems.forEach(a => {
          this.hasChilds = true;
          let child: Child = a.payload.doc.data();
          child.id = a.payload.doc.id;
          this.childs.push(child);
        });
      });
    console.log('view will enter child Page');
  }

  goToChildAdd() {
    this.router.navigate(['/child-add/child']);
  }

  detailsPage() {
    //remove new user from storage
    this.storage.remove('newUser');
    this.router.navigate(['/details']);
  }

  ngOnInit() {
  }

}
