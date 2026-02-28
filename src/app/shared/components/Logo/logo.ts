import {Component, inject} from '@angular/core';
import {NgOptimizedImage} from '@angular/common';

@Component({
  selector: 'app-logo',
  templateUrl: './logo.html',
  imports: [
    NgOptimizedImage
  ],
  styleUrls: ['./logo.scss']
})

export class LogoComponent {}
