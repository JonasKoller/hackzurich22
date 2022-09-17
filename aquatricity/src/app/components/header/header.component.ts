import { Component, OnInit } from '@angular/core';
import {faArrowRightFromBracket, faCoins} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../_core/auth.service';
import {Router} from '@angular/router';
import {UserdataService} from "../../_core/userdata.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen = false;
  logoutIcon = faArrowRightFromBracket;
  coinFront = faCoins;
  environmentalCoins: number | undefined = 0;

  constructor(private auth: AuthService, private router: Router, private userdataService: UserdataService) { }

  async ngOnInit() {
    let user = await this.auth.getCurrentUser();
    this.userdataService.loadUserdata(user!.uid).subscribe(value => {
      this.environmentalCoins = value?.environmentalCoins;
    })
  }

  changevalue() {
    this.isOpen = !this.isOpen;
  }

  async logout() {
    await this.auth.logout();
    await this.router.navigate(['/login']);
  }
}
