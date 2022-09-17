import { Component, OnInit } from '@angular/core';
import {AuthService, User} from "../../_core/auth.service";
import {Observable} from "rxjs";

@Component({
  selector: 'app-overview-container',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss']
})
export class OverviewContainerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
