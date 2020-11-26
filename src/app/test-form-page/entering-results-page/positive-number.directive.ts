import { Directive, Input } from '@angular/core';
import { ValidatorFn, AbstractControl, NG_VALIDATORS, Validator } from '@angular/forms';

@Directive({
  selector: '[appPositiveNumber]',
  providers: [{ provide: NG_VALIDATORS, useExisting: PositiveNumberDirective, multi: true }]

})
export class PositiveNumberDirective implements Validator {

    @Input('appPositiveNumber') isPositive: number;
    
  validate(c: AbstractControl): { [key: number]: any; } {
    return positiveNumberValidator()(c);
  }
}

export function positiveNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const isPositive = Number(control.value) > 0
    return isPositive ? null : { positive: { value: control.value } };
  };
}