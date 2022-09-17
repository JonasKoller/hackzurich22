import { Component, OnInit } from '@angular/core';
import { faBell } from '@fortawesome/free-solid-svg-icons';
import {AuthService, User} from "../_core/auth.service";
import {auth} from "firebase";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = { displayname: '', email: '', password: '' };
  showErrorMessage = false;

  faBell = faBell;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  async login() {
    this.auth.loginWithEmailAndPassword(this.user).catch((e) => {
      this.showErrorMessage = true;

      setTimeout(() => {
        this.showErrorMessage = false;
      }, 4000)
    });
  }
}
