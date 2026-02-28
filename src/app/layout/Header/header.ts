import {Component} from '@angular/core';
import {LogoComponent} from '../../shared/components/Logo/logo';
import {ButtonComponent} from '../../shared/components/Button/button';

@Component({
  selector: 'app-header',
  templateUrl: './header.html',
  styleUrls: ['./header.scss'],
  imports: [LogoComponent, ButtonComponent]
})

export class HeaderComponent {
  userName: string = 'John Doe';
}
