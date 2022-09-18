import {Component, Input, OnInit} from '@angular/core';
import {Userdata} from "../../models";
import {AuthService} from "../../_core/auth.service";
import {AngularFirestore} from "@angular/fire/firestore";
import {UserdataService} from "../../_core/userdata.service";

@Component({
  selector: 'app-my-forest-page',
  templateUrl: './my-forest-page.component.html',
  styleUrls: ['./my-forest-page.component.scss']
})
export class MyForestPageComponent implements OnInit {

  @Input() userdata: Userdata | undefined | null = null;

  updateLevelLimit = [0,8,14,23,35,55];
  user: any;

  constructor(private service: UserdataService, private auth: AuthService) { }

  async ngOnInit() {
    this.user = await this.auth.getCurrentUser();
  }

  getNextLevel() {
    return this.userdata ? this.userdata?.level + 1 : 1;
  }

  getButtonLabel() {
    return this.userdata?.environmentalCoins && this.userdata.environmentalCoins >= this.updateLevelLimit[this.getNextLevel() - 1] ? 'PAY ' + this.updateLevelLimit[this.getNextLevel() - 1] +' COINS' : 'NOT ENOUGH'
  }

  isDisabled() {
    return this.userdata?.environmentalCoins && this.userdata?.environmentalCoins < this.updateLevelLimit[this.getNextLevel() - 1] && this.getNextLevel() - 1 < 6
  }

  updateLevel() {
    this.service.removeUserPoints(this.updateLevelLimit[this.getNextLevel() - 1], this.user?.uid)
    this.service.increaseLevel(this.user?.uid)
  }
}
