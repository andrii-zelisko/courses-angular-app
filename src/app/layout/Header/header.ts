import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LogoComponent } from '../../shared/components/Logo/logo';
import { ButtonComponent } from '../../shared/components/Button/button';
import { BUTTON_NAMES } from '../../services/button-names-store.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [CommonModule, LogoComponent, ButtonComponent]
})

export class HeaderComponent {

  BUTTON_NAMES = BUTTON_NAMES;

  constructor(public auth: AuthService) {}

  logout(): void {
    this.auth.logout();
  }
}
