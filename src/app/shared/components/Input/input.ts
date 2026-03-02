import {Component, Input} from '@angular/core';
import {ControlValueAccessor, NG_VALUE_ACCESSOR, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: 'input.html',
  imports: [
    ReactiveFormsModule
  ],
  styleUrls: ['input.scss'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: InputComponent,
    multi: true
  }]
})

export class InputComponent implements ControlValueAccessor {
  @Input() label: string = 'Input';
  @Input() placeholder: string = 'Please enter text';
  @Input() type: string = 'text';
  @Input() error: string = '';

  value = '';

  onChange = (value:any)=>{};
  onTouched = ()=>{};

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(fn:any) {
    this.onChange = fn;
  }

  registerOnTouched(fn:any) {
    this.onTouched = fn;
  }

  setValue(event:any){
    this.value = event.target.value;
    this.onChange(this.value);
  }
}
