import {Injectable} from '@angular/core';
import {AngularFireAuth} from '@angular/fire/auth';
import {Router} from '@angular/router';
import {first} from "rxjs/operators";
import {AngularFirestore} from "@angular/fire/firestore";

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private afAuth: AngularFireAuth,
              private router: Router,
              private db: AngularFirestore) {
  }

  async loginWithEmailAndPassword(user: User) {
    await this.afAuth.auth.signInWithEmailAndPassword(user.email, user.password).then(() => {
      this.router.navigateByUrl('/overview');
    });
  }

  async createUserWithEmailAndPassword(user: User) {
    // @ts-ignore
    await this.afAuth.auth.createUserWithEmailAndPassword(user.email, user.password).then(res => {
      // @ts-ignore
      res.user.updateProfile({
        displayName: user.displayname
      });
      this.addUserToFirestore();
      this.router.navigateByUrl('/interests');
    });
  }

  async authenticated() {
    return await this.afAuth.authState.pipe(first()).toPromise();
  }

  async logout() {
    await this.afAuth.auth.signOut();
  }

  getCurrentUser() {
    return this.afAuth.authState.pipe(first()).toPromise();
  }

  getCurrentUserUid() {
    // @ts-ignore
    return this.afAuth.auth.currentUser.uid;
  }

  changeUsername(username: string) {
    // @ts-ignore
    this.afAuth.auth.currentUser.updateProfile({
      displayName: username
    });
  }

  changePassword(email: string) {
    this.afAuth.auth.sendPasswordResetEmail(email);
  }

  useDeviceLang() {
    this.afAuth.auth.useDeviceLanguage();
  }

  addUserToFirestore() {
    this.db.collection('users').doc(this.getCurrentUserUid()).set({
      currentPath: "",
      environmentalCoins: 0,
      interests: [],
      readArticles: [],
      finishedPaths: {},
      level: 1
    }).then();
  }

}

export interface User {
  email: string;
  password: string;
  displayname: string;
}
