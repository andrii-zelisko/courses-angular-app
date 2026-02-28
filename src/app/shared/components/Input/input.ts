import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.html',
  styleUrls: ['./input.scss']
})

export class InputComponent {
  @Input() label: string = 'Input';
  @Input() placeholder: string = 'Please enter text';
  @Input() type: string = 'text';
  @Input() private _value: string = '';
  @Input() error: string = '';
  value: string = this._value;

  onInput($event: Event) {
    const target = $event.target as HTMLInputElement;
    this._value = target.value;
    this.value = this._value;
  }
}
