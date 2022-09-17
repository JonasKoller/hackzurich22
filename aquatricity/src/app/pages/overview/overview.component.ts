import { Component, OnInit } from '@angular/core';
import {AuthService, User} from 'src/app/_core/auth.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewComponent implements OnInit {
  currentUser: any;

  constructor(private auth: AuthService) { }

  async ngOnInit() {
    this.currentUser = await this.auth.getCurrentUser();
  }

}
