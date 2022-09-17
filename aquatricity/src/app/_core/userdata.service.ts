import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {Observable} from 'rxjs';
import {tap} from 'rxjs/operators';
import {Path, Userdata} from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private firestore: AngularFirestore) { }

  loadUserdata(uid: string): Observable<Userdata> {
    let itemDoc: AngularFirestoreDocument<Userdata> = this.firestore.doc('users/' + uid);
    return itemDoc.valueChanges().pipe(tap(console.log));
  }

  loadCurrentPathDetails(uuid: string): Observable<Path> {
    let itemDoc: AngularFirestoreDocument<Path> = this.firestore.doc('paths/' + uuid);
    return itemDoc.valueChanges().pipe(tap(console.log));
  }
}
