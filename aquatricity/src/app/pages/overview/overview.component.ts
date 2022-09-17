import {Component, Input, OnInit} from '@angular/core';
import {AuthService} from 'src/app/_core/auth.service';
import {Article, Path, Userdata} from '../../models';
import {getCurrentPath, getFinishedPathTasks, getPathArticles, getUnfinishedPathTasks} from '../../helpers/helpers';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {

  @Input() userdata: Userdata | undefined | null = null;
  @Input() allPaths: Path[] | undefined | null = [];
  @Input() allArticles: Article[] | undefined | null = [];

  currentUser: any;

  constructor(private auth: AuthService) { }

  async ngOnInit() {
    this.currentUser = await this.auth.getCurrentUser();
  }

  getCurrentPath(): Path | undefined {
    return getCurrentPath(this.userdata?.currentPath, this.allPaths);
  }

  getFinishedPathTasks() {
    let currentPath = this.getCurrentPath();
    let pathArticles = getPathArticles(currentPath?.articles, this.allArticles);
    let map = getFinishedPathTasks(this.userdata?.readArticles, pathArticles)?.map(pathArticles => pathArticles.title);
    return map === undefined ? [] : map;
  }

  getUnfinishedPathTasks() {
    let currentPath = this.getCurrentPath();
    let pathArticles = getPathArticles(currentPath?.articles, this.allArticles);
    let map = getUnfinishedPathTasks(this.userdata?.readArticles, pathArticles)?.map(pathArticles => pathArticles.title);
    return map === undefined ? [] : map;
  }

  getNewestTwoArticles(): Article[] {
    let articles = this.allArticles?.sort((a, b) => a.creationDate.toMillis() - b.creationDate.toMillis()).slice(0, 2);
    return articles === undefined ? [] : articles;
  }

}
