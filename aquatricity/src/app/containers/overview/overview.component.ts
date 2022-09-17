import {Component, OnInit} from '@angular/core';
import {AuthService} from "../../_core/auth.service";
import {Observable} from "rxjs";
import {Article, Path, Userdata} from '../../models';
import {UserdataService} from '../../_core/userdata.service';

@Component({
  selector: 'app-overview-container',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewContainerComponent implements OnInit {

  userdata: Observable<Userdata | undefined> | null = null;
  allPaths: Observable<Path[] | undefined> | null = null;
  allArticles: Observable<Article[] | undefined> | null = null;

  constructor(private userdataService: UserdataService, private auth: AuthService) {
  }

  async ngOnInit() {
    let user = await this.auth.getCurrentUser();
    this.userdata = this.userdataService.loadUserdata(user!.uid);
    this.allPaths = this.userdataService.loadPaths();
    this.allArticles = this.userdataService.loadArticles();
  }



}
