import { Component, ElementRef, forwardRef, Host, Input, OnInit, Optional, Renderer2, Self, SkipSelf, ViewChild } from '@angular/core';
import { AbstractControl, ControlContainer, ControlValueAccessor, FormControl, FormGroup, NgControl, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      multi: true,
      useExisting: forwardRef(() => InputComponent)
    }
  ]
})
export class InputComponent implements OnInit, ControlValueAccessor {
  @ViewChild('input', { static: false }) input?: ElementRef;
  @Input() type: string = 'text';
  @Input() value: any;
  @Input() formControlName?: string;
  private control!: AbstractControl;

  constructor(private _renderer: Renderer2,
    @Optional() @Host() @SkipSelf()
    private controlContainer: ControlContainer
  ) { }
  
  ngOnInit(): void {
    if (this.controlContainer) {
      if (this.formControlName) {
        this.control = this.controlContainer?.control?.get(this.formControlName) as AbstractControl;
      } else {
        console.warn('Missing FormControlName directive from host element of the component');
      }
    } else {
      console.warn('Can\'t find parent FormGroup directive');
    }


  }

  hasError(errorType = "required") {
    return this.control ? (this.control.hasError(errorType) && this.control.touched) : false;
  }


  writeValue(value: string) {
    if (value !== undefined) {
      this.value = value;
    }
    this.input && this._renderer.setProperty(this.input?.nativeElement, 'value', value);

  }

  propagateChange = (_: any) => { };
  propagateTouched = (_: any) => { };

  registerOnChange(fn: any) {
    this.propagateChange = fn;
  }

  registerOnTouched(fn: any) {
    this.propagateTouched = fn;
  }

  touched($event: any) {
    this.propagateTouched($event);
  }




}
