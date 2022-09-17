import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  constructor(private firestore: AngularFirestore) {}

  setUserInterests(interests: string[], currentUser: any) {
    this.firestore.collection('users').doc(currentUser).update({'interests': interests});
  }
}
