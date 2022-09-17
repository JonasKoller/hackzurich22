import { Component, OnInit } from '@angular/core';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import {AuthService, User} from "../_core/auth.service";
import {checkEmail} from "../helpers/helpers";

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {
  user: User = { displayname: '', email: '', password: '' };
  passwordRepeat: string = '';
  showErrorMessage = false;
  errorMessage: string = '';

  faArrowRight = faArrowRight;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  async register() {
    if (
      checkEmail(this.user.email) &&
      this.user.password !== '' &&
      this.user.displayname !== '' &&
      this.passwordRepeat !== '' &&
      this.passwordRepeat === this.user.password
    ) {
      this.auth.createUserWithEmailAndPassword(this.user).catch((e) => {
        this.errorMessage = e.message;
        this.showErrorMessage = true;
        setTimeout(() => {
          this.showErrorMessage = false;
        }, 4000)
      });
    }
  }

}
