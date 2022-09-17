import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {Article, Path, Userdata} from '../models';
import {firestore} from "firebase/app";
import * as firebase from "firebase";

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private firestore: AngularFirestore) { }

  loadUserdata(uid: string): Observable<Userdata | undefined> {
    let itemDoc: AngularFirestoreDocument<Userdata> = this.firestore.doc('users/' + uid);
    return itemDoc.valueChanges();
  }

  loadPaths(): Observable<Path[] | undefined> {
    let itemDoc = this.firestore.collection<Path>('paths');
    return itemDoc.valueChanges();
  }

  loadArticles(): Observable<Article[] | undefined> {
    let itemDoc = this.firestore.collection<Article>('articles');
    return itemDoc.valueChanges();
  }

  addUserPoints(pointsToEarn: number, currentUserUid: any) {
    this.firestore.collection('users').doc(currentUserUid).update({'environmentalCoins': firebase.firestore.FieldValue.increment(pointsToEarn)});
  }

  markArticleAsRead(articleUid: string, currentUserUid: any) {
    this.firestore.collection('users').doc(currentUserUid).update({'readArticles': firebase.firestore.FieldValue.arrayUnion(articleUid)});
  }
}
