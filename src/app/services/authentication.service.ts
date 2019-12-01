import { switchMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { User } from 'src/interfaces';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore, AngularFirestoreDocument } from '@angular/fire/firestore';
import {AngularFireDatabase} from "@angular/fire/database";

import { Router } from '@angular/router';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  user$: Observable<User>;
  private currentUserUid: string;

  constructor(
    private afAuth: AngularFireAuth,
    private afs: AngularFirestore,
    public afDatabase: AngularFireDatabase,
    private router: Router,
    private storage: Storage
  ) {
    this.user$ = this.afAuth.authState.pipe(
      switchMap(user => {
        // Logged in
        if (user) {
          this.setUid(user.uid);
          return this.afDatabase.list(`parents/${user.uid}`).valueChanges();
        } else {
          // Logged out
          return of(null);
        }
      })
    )
  }

  async register(newUser: User) {
    const r = await this.afAuth.auth.createUserWithEmailAndPassword(newUser.email, newUser.password);
    newUser.uid = r.user.uid;
    this.updateUserData(newUser);
  }

  async signIn(email, password) {
    return this.afAuth.auth.signInWithEmailAndPassword(email, password);
  }

  private updateUserData(user: User) {
    //console.log(user);
    // Sets user data to firestore on login. add to parents collection
    
    // const userRef: AngularFirestoreDocument<User> = this.afs.doc(`parents/${user.uid}`);

    // const data = {
    //   uid: user.uid,
    //   email: user.email,
    //   fullName: user.fullName == undefined ? '' : user.fullName,
    //   phone: user.phone == undefined ? '' : user.phone
    // }

    // return userRef.set(data, { merge: true });


    const data = {
      uid: user.uid,
      email: user.email,
      fullName: user.fullName == undefined ? '' : user.fullName,
      phone: user.phone == undefined ? '' : user.phone
    }
    this.afDatabase.list('/parents').push(data);


  }

  setUid(uid: string): void {
    this.currentUserUid = uid;
  }

  getUid(): string {
    return this.currentUserUid;
  }

  async signOut() {
    this.setUid('');
    await this.afAuth.auth.signOut();

    this.storage.clear().then(() => {
      this.router.navigate(['/']);
    })

  }
}
