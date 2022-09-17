import { Component } from '@angular/core';
import {AuthService} from "../../_core/auth.service";
import {Observable} from "rxjs";
import {Path, Userdata} from '../../models';
import {UserdataService} from '../../_core/userdata.service';

@Component({
  selector: 'app-overview-container',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewContainerComponent {

  userdata: Observable<Userdata> | null = null;
  currentPathDetails: Observable<Path> | null = null;

  constructor(private userdataService: UserdataService, private auth: AuthService) {
    this.auth.getCurrentUser().then(user => {
      if (!user)
        return;
      this.userdata = userdataService.loadUserdata(user.uid)
    }).then(() => {
      this.userdata?.subscribe(userdata => {
        this.currentPathDetails = userdataService.loadCurrentPathDetails(userdata.currentPath);
      });
    });
  }
}
