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

  userdata: Observable<Userdata | undefined> | null = null;

  constructor(private userdataService: UserdataService, private auth: AuthService) { }

  async ngOnInit() {
    let user = await this.auth.getCurrentUser();
    this.userdata = this.userdataService.loadUserdata(user!.uid);
  }

}
