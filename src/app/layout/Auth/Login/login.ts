import { Component } from '@angular/core';
import {FormGroup, FormControl, Validators, ReactiveFormsModule} from '@angular/forms';
import { Router } from '@angular/router';
import { CourseStoreService } from '../../../services/course-store.service';
import { BUTTON_NAMES } from '../../../services/button-names-store.service';
import {ButtonComponent} from '../../../shared/components/Button/button';
import {InputComponent} from '../../../shared/components/Input/input';
import {AuthService} from '../../../services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: 'login.html',
  styleUrls: ['login.scss'],
  imports: [ButtonComponent, InputComponent, ReactiveFormsModule]
})
export class LoginComponent {

  BUTTON_NAMES = BUTTON_NAMES;
  isLoading = false;
  commonError = '';

  loginForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  constructor(
    private router: Router,
    private store: CourseStoreService,
    private authService: AuthService
  ) {}

  login() {
    if (this.loginForm.invalid) return;

    this.commonError = '';
    this.isLoading = true;

    setTimeout(() => {
      const { email, password } = this.loginForm.value;

      const user = this.store.users.find(u => u.email === email);

      if (!user) {
        this.commonError = 'User with this email does not exist';
        this.isLoading = false;
        return;
      }

      if (user.password !== password) {
        this.commonError = 'Incorrect password';
        this.isLoading = false;
        return;
      }

      this.authService.login({
        email: user.email,
        name: user.name
      });

      this.router.navigate(['/courses']);
      this.isLoading = false;
    }, 500);
  }

  goToRegister() {
    this.router.navigate(['/register']);
  }
}
