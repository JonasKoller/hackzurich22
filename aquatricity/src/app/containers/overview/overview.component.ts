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

  userdata: Userdata | null = null;
  currentPathDetails: Path | null = null;
  currentPathArticles: Article[] = [];

  constructor(private userdataService: UserdataService, private auth: AuthService) {
  }

  async ngOnInit() {
    console.log('AFASFS')
    let user = await this.auth.getCurrentUser();

    if (user) {
      this.userdata = await this.userdataService.loadUserdata(user.uid)
    }
    if (this.userdata) {
      this.currentPathDetails = await this.userdataService.loadCurrentPathDetails(this.userdata.currentPath);
    }
    if (this.currentPathDetails) {
      this.currentPathArticles = await this.userdataService.getCurrentPathArticles(this.currentPathDetails.articles);
    }

    console.log('AAAA', this.userdata, this.currentPathArticles, this.currentPathArticles);
  }

}
