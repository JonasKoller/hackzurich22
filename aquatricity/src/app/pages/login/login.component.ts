import { Component, OnInit } from '@angular/core';
import {faArrowRight} from '@fortawesome/free-solid-svg-icons';
import {AuthService, User} from "../../_core/auth.service";
import {checkEmail} from "../../helpers/helpers";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  user: User = { displayname: '', email: '', password: '' };
  showErrorMessage = false;
  errorMessage: string = '';

  faArrowRight = faArrowRight;

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
