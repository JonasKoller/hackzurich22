import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_core/auth.service";
import {InterestsService} from "../../_core/interests.service";

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {


  interests: string[] = [];

  constructor(private auth: AuthService, private interestService: InterestsService) { }

  ngOnInit(): void {
  }

  addTag(eventTarget: any, tag: string) {
    if (eventTarget.checked) {
      this.interests.push(tag);
    } else {
      this.interests.splice(this.interests.indexOf(tag), 1);
    }
    console.log(this.interests);
  }

  getButtonLabel() {
    return this.interests.length ? 'NEXT' : 'SKIP';
  }

  emitInterests() {
    this.interestService.setUserInterests(this.interests, this.auth.getCurrentUserUid());
  }
}
