import { Component, OnInit } from '@angular/core';
import {AuthService, User} from "../_core/auth.service";
import {auth} from "firebase";
import {checkEmail} from "../helpers/helpers";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = { displayname: '', email: '', password: '' };
  showErrorMessage = false;
  errorMessage: string = '';

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  async login() {
    if (checkEmail(this.user.email) && this.user.password !== '') {
      this.auth.loginWithEmailAndPassword(this.user).catch((e) => {
        this.errorMessage = e.message;
        this.showErrorMessage = true;

        setTimeout(() => {
          this.showErrorMessage = false;
        }, 4000)
      });
    }
  }
}
