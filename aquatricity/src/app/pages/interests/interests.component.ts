import { Component, OnInit } from '@angular/core';
import {AuthService} from "../../_core/auth.service";
import {InterestsService} from "../../_core/interests.service";
import {Router} from '@angular/router';

@Component({
  selector: 'app-interests',
  templateUrl: './interests.component.html',
  styleUrls: ['./interests.component.scss']
})
export class InterestsComponent implements OnInit {


  interests: string[] = [];

  constructor(private auth: AuthService, private interestService: InterestsService, private router: Router) { }

  ngOnInit(): void {
  }

  addTag(eventTarget: any, tag: string) {
    if (eventTarget.checked) {
      this.interests.push(tag);
    } else {
      this.interests.splice(this.interests.indexOf(tag), 1);
    }
  }

  getButtonLabel() {
    return this.interests.length ? 'NEXT' : 'SKIP';
  }

  async emitInterests() {
    await this.interestService.setUserInterests(this.interests, this.auth.getCurrentUserUid());
    await this.router.navigate(['/'])
  }
}
