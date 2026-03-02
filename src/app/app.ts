import {Component, Injectable,} from '@angular/core';
import {HeaderComponent} from './layout/Header/header';
import {RouterOutlet} from '@angular/router';
import {rootDir} from 'vitest/node';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent, RouterOutlet],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})

export class App {}
