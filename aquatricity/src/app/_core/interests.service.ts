import { Injectable } from '@angular/core';
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class InterestsService {

  constructor(private db: AngularFirestore) {}

  setUserInterests(interests: string[], currentUser: any) {
    console.log(this.db.collection('users').doc(currentUser).update({'interests': interests}));
  }

  getUserInterests() {

  }
}
