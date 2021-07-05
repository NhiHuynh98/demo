import { Component, Input, forwardRef } from '@angular/core';
import { ControlValueAccessor, FormControl, FormGroup, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(
        () => InputComponent
      ),
      multi: true
    }
  ]
})
// How to connect Form API with element DOM 
export class InputComponent implements ControlValueAccessor {
  @Input()
  public parentForm!: FormGroup;
  @Input()
  public fieldName!: string;

  @Input()
  public submitted: boolean = false

  @Input()
  public label!: string;

  public value!: string
  public changed: ((value: string) => void);
  public touched!: () => void;
  public isDisabled!: boolean;

  get formField(): FormControl {
    return this.parentForm?.get(this.fieldName) as FormControl
  }

  constructor() {
    this.changed = () => { }
  }


  writeValue(obj: any): void {
    this.value = obj;
  }

  registerOnChange(fn: any): void {
    this.changed = fn;
  }

  registerOnTouched(fn: any): void {
    this.touched = fn
  }

  onChange(event: Event): void {
    const value: string =
      (<HTMLInputElement>event.target).value;
    this.changed(value);
  }


}
