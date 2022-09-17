import { Component, OnInit } from '@angular/core';
import {faArrowRightFromBracket} from '@fortawesome/free-solid-svg-icons';
import {AuthService} from '../../_core/auth.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  isOpen = false;
  logoutIcon = faArrowRightFromBracket;

  constructor(private auth: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  changevalue() {
    this.isOpen = !this.isOpen;
  }

  async logout() {
    await this.auth.logout();
    await this.router.navigate(['/login']);
  }
}
