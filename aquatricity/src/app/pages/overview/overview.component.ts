import { Component, OnInit } from '@angular/core';
import {AuthService, User} from 'src/app/_core/auth.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  currentUser: any;
  finishedPathTasks = ['Boil the right amount of water', 'Switch off devices in standby', 'Always turn off light'];
  unfinishedPathTasks = ['Cooking with a lid', 'Proper ventilation'];

  constructor(private auth: AuthService) { }

  async ngOnInit() {
    this.currentUser = await this.auth.getCurrentUser();
  }

}
