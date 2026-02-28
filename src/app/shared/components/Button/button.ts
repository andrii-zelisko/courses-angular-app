import {Component} from '@angular/core';
import {Input, Output, EventEmitter} from '@angular/core';
import {NgClass} from '@angular/common';

@Component({
  selector: 'app-button',
  templateUrl: './button.html',
  imports: [
    NgClass
  ],
  styleUrls: ['./button.scss']
})

export class ButtonComponent {
  @Input() text: string = 'Button';
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() disabled: boolean = false;
  @Input() color: 'primary' | 'accent' | 'warning' = 'primary';

  @Output() clicked = new EventEmitter<void>();

  handleClick() {
    if (!this.disabled) {
      this.clicked.emit();
    }
  }
}
