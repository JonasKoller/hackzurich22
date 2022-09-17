import { Component, OnInit } from '@angular/core';
import {UserdataService} from "../../_core/userdata.service";
import {AuthService} from "../../_core/auth.service";
import {Observable} from "rxjs";
import {Article, Path, Userdata} from "../../models";

@Component({
  selector: 'app-my-forest',
  templateUrl: './my-forest.component.html',
  styleUrls: ['./my-forest.component.scss']
})
export class MyForestComponent implements OnInit {

  allPaths: Observable<Path[] | undefined> | null = null;
  allArticles: Observable<Article[] | undefined> | null = null;

  constructor(private userdataService: UserdataService) { }

  async ngOnInit() {
    this.allPaths = this.userdataService.loadPaths();
    this.allArticles = this.userdataService.loadArticles();
  }

}
