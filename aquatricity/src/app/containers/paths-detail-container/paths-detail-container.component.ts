import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';
import {Article, Path, Userdata} from '../../models';
import {ActivatedRoute} from '@angular/router';
import {UserdataService} from '../../_core/userdata.service';
import {AuthService} from '../../_core/auth.service';

@Component({
  selector: 'app-paths-detail-container',
  templateUrl: './paths-detail-container.component.html',
  styleUrls: ['./paths-detail-container.component.scss']
})
export class PathsDetailContainerComponent implements OnInit {

  category!: string;
  allPaths: Observable<Path[] | undefined> | null = null;
  allArticles: Observable<Article[] | undefined> | null = null;
  userdata: Observable<Userdata | undefined> | null = null;

  constructor(private route: ActivatedRoute, private userdataService: UserdataService, private auth: AuthService) { }

  async ngOnInit() {
    this.category = this.route.snapshot.paramMap.get('uid')!;
    let user = await this.auth.getCurrentUser();
    this.userdata = this.userdataService.loadUserdata(user!.uid);
    this.allPaths = this.userdataService.loadPaths();
    this.allArticles = this.userdataService.loadArticles();
  }

}
