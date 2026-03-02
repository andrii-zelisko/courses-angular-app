import {Component} from '@angular/core';

@Component({
  selector: 'app-logo',
  templateUrl: 'logo.html',
  styleUrls: ['logo.scss']
})

export class LogoComponent {
  logoPath = `/assets/images/logo.png`;
}
