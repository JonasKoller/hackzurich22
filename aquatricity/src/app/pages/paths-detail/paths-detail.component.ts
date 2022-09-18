import {Component, Input, OnInit} from '@angular/core';
import {Article, Path, Userdata} from '../../models';
import {AngularFirestore} from '@angular/fire/firestore';
import {AuthService} from '../../_core/auth.service';
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import {UserdataService} from '../../_core/userdata.service';
import * as firebase from 'firebase';
import {Router} from '@angular/router';


@Component({
  selector: 'app-paths-detail',
  templateUrl: './paths-detail.component.html',
  styleUrls: ['./paths-detail.component.scss']
})
export class PathsDetailComponent implements OnInit {

  @Input() selectedUID!: string;
  @Input() paths!: Path[] | null | undefined;
  @Input() articles!: Article[] | null | undefined;
  @Input() userdata!: Userdata | null | undefined;
  coinFront = faCoins;

  constructor(private fireStore: AngularFirestore, private auth: AuthService, private userdataSerivce: UserdataService, private router: Router) { }

  ngOnInit(): void {
  }

  getSelectedPath(): Path | undefined {
    return this.paths?.filter(path => path.uid === this.selectedUID)[0];
  }

  getUnfinishedTasks(): string[] {
    let filtered = this.getSelectedPath()?.articles
      .filter(article => !this.userdata?.readArticles.includes(article))
      .map(article => this.getArticleTitleByUID(article));
    return filtered === undefined ? [] : filtered;
  }

  getFinishedTasks(): string[] {
    let filtered = this.getSelectedPath()?.articles
      .filter(article => this.userdata?.readArticles.includes(article))
      .map(article => this.getArticleTitleByUID(article));
    return filtered === undefined ? [] : filtered;
  }

  getArticleTitleByUID(uid: string) {
    let article = this.articles?.find(a => a.uid === uid);
    if (article) {
      return article.title;
    }
    return 'TITLE';
  }

  hasExistingPath(): boolean {
    return this.userdata?.currentPath !== undefined && this.userdata?.currentPath !== '';
  }

  existingPathIsFinished(): boolean {
    return this.hasExistingPath() && this.getUnfinishedTasks().length == 0;
  }

  existingPathIsNotFinished(): boolean {
    return this.hasExistingPath() && this.getUnfinishedTasks().length > 0;
  }

  async addNewPath() {
    let userUID = await this.auth.getCurrentUserUid();
    await this.fireStore.doc('users/' + userUID).update({'currentPath': this.selectedUID});
  }

  shouldGetReward(): boolean {
    return !(this.userdata as any).finishedPaths[this.selectedUID];
  }

  async earnEnvironmentalCoins() {
    let userUID = await this.auth.getCurrentUserUid();
    if (this.shouldGetReward()) {
      let pointsToEarn = this.getSelectedPath()?.rewardEnvironmentalCoins;
      if (pointsToEarn) {
        this.userdataSerivce.addUserPoints(pointsToEarn, userUID)
      }
      await this.fireStore.doc('users/' + userUID).update({ finishedPaths: {
          [`${this.selectedUID}`]: true
        }});
    }
    await this.fireStore.doc('users/' + userUID).update({currentPath: ''});
    await this.router.navigateByUrl('paths');
  }

  async discontinuePath() {
    let userUID = await this.auth.getCurrentUserUid();
    await this.fireStore.doc('users/' + userUID).update({currentPath: ''});
    await this.fireStore.doc('users/' + userUID).update({ finishedPaths: {
        [`${this.selectedUID}`]: false
      }});
    await this.router.navigateByUrl('paths');
  }
}
