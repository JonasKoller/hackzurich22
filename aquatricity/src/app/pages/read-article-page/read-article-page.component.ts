import {Component, Input, OnInit} from '@angular/core';
import {Article, Userdata} from "../../models";
import {Router} from "@angular/router";
import {faCoins} from "@fortawesome/free-solid-svg-icons";
import { UserdataService } from 'src/app/_core/userdata.service';
import { AuthService } from 'src/app/_core/auth.service';

@Component({
  selector: 'app-read-article-page',
  templateUrl: './read-article-page.component.html',
  styleUrls: ['./read-article-page.component.scss']
})
export class ReadArticlePageComponent implements OnInit {
  @Input() uid!: string;
  @Input() userdata: Userdata | undefined | null = null;
  @Input() articles!: Article[] | null | undefined;

  activeStep = 0;
  coinFront = faCoins;

  constructor(private router: Router, private userdataService: UserdataService, private auth: AuthService) { }

  ngOnInit(): void {
  }

  getArticleWithUid() {
    return this.articles?.filter(article => article.uid === this.uid)[0];
  }

  nextStep() {
    this.activeStep++;
  }

  async finish() {
    let data = this.userdata?.readArticles.find((article) => article === this.uid);
    if (!data) {
      this.userdataService.addUserPoints(this.getArticleWithUid()?.pointToEarn!, await this.auth.getCurrentUserUid());
      this.userdataService.markArticleAsRead(this.uid, await this.auth.getCurrentUserUid());
    }
    this.router.navigateByUrl('articles');
  }
}
