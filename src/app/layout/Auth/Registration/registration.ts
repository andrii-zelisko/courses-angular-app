import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators} from '@angular/forms';
import {ActivatedRoute, Router} from '@angular/router';
import { CourseStoreService } from '../../../services/course-store.service';
import { BUTTON_NAMES } from '../../../services/button-names-store.service';
import { User } from '../../../models/user.model';
import { ButtonComponent } from '../../../shared/components/Button/button';
import { InputComponent } from '../../../shared/components/Input/input';

@Component({
  selector: 'app-register',
  templateUrl: 'registration.html',
  styleUrls: ['registration.scss'],
  imports: [ButtonComponent, InputComponent, ReactiveFormsModule]
})
export class RegisterComponent {

  constructor(
    public store: CourseStoreService,
    private router: Router
  ) {}

  BUTTON_NAMES = BUTTON_NAMES;
  isLoading = false;
  commonError = '';

  registerForm = new FormGroup({
    email: new FormControl('', [Validators.required, Validators.email]),
    name: new FormControl('', [Validators.required, Validators.minLength(2)]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  });

  register(): void {
    if (this.registerForm.invalid) return;

    this.commonError = '';
    this.isLoading = true;

    const { email, name, password } = this.registerForm.value as { email: string; name: string; password: string; };

    const existingUser: User | undefined = this.store.users.find(u => u.email === email);

    if (existingUser) {
      this.commonError = 'User with this email already exists';
      this.isLoading = false;
      return;
    }

    this.store.addUser({ email, name, password });

    this.isLoading = false;
    this.router.navigate(['/login']);
  }

  goToLogin(): void {
    this.router.navigate(['/login']);
  }
}
