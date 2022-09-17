import { Component, OnInit } from '@angular/core';
import {Observable} from "rxjs";
import {Article, Userdata} from "../../models";
import {ActivatedRoute} from "@angular/router";
import {UserdataService} from "../../_core/userdata.service";
import {AuthService} from "../../_core/auth.service";

@Component({
  selector: 'app-read-article',
  templateUrl: './read-article.component.html',
  styleUrls: ['./read-article.component.scss']
})
export class ReadArticleComponent implements OnInit {
  uid!: string;
  allArticles: Observable<Article[] | undefined> | null = null;
  userdata: Observable<Userdata | undefined> | null = null;

  constructor(private route: ActivatedRoute,
              private userdataService: UserdataService,
              private auth: AuthService) { }

  async ngOnInit() {
    let user = await this.auth.getCurrentUser();
    this.uid = this.route.snapshot.paramMap.get('uid')!;
    this.allArticles = this.userdataService.loadArticles();
    this.userdata = this.userdataService.loadUserdata(user!.uid);
  }
}
