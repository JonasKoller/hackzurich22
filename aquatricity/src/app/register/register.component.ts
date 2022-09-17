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
    let validationErrors = [];
    if (!checkEmail(this.user.email)) {
      validationErrors.push('Please provide a valid email');
    }
    if (this.user.password === '') {
      validationErrors.push('Password is invalid');
    }
    if (this.user.displayname === '') {
      validationErrors.push('Username is invalid');
    }
    if (this.passwordRepeat === '') {
      validationErrors.push('Password repeat is invalid');
    }
    if (this.passwordRepeat !== this.user.password) {
      validationErrors.push('Please enter the same password two times');
    }

    if (validationErrors.length === 0) {
      this.auth.createUserWithEmailAndPassword(this.user).catch((e) => {
        this.displayErrorMessage(e.message);
      });
    } else {
      await this.displayErrorMessage(validationErrors.join(', '));
    }
  }

  async displayErrorMessage(errorMessage: string) {
    this.errorMessage = errorMessage;
    this.showErrorMessage = true;
    setTimeout(() => {
      this.showErrorMessage = false;
    }, 6000);
  }
}
