import { Injectable } from '@angular/core';
import {AngularFirestore, AngularFirestoreDocument} from '@angular/fire/firestore';
import {filter, tap} from 'rxjs/operators';
import {Article, Path, Userdata} from '../models';

@Injectable({
  providedIn: 'root'
})
export class UserdataService {

  constructor(private firestore: AngularFirestore) { }

  async loadUserdata(uid: string): Promise<any> {
    debugger;
    let itemDoc = this.firestore.collection('users').doc(uid);
    return itemDoc.valueChanges().toPromise();
  }

  async loadCurrentPathDetails(uuid: string): Promise<Path> {
    let itemDoc: AngularFirestoreDocument<Path> = this.firestore.doc('paths/' + uuid);
    return itemDoc.valueChanges().pipe(tap(console.log)).toPromise();
  }

  async getCurrentPathArticles(articleUuids: string[]): Promise<Article[]> {
    let articles: Article[] = [];
    for (let uuid of articleUuids) {
      let itemDoc: AngularFirestoreDocument<Article> = await this.firestore.doc('articles/' + uuid);
      await itemDoc.valueChanges().toPromise().then(article => {
        if (article) {
          articles.push(article)
        }
      });
    }
    return articles;
  }
}
