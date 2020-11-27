import { ValidatorFn, AbstractControl, Validator } from '@angular/forms';

export class PositiveNumberValidator implements Validator {

  validate(c: AbstractControl): { [key: number]: any; } {
    return positiveNumberValidator()(c);
  }
}

export function positiveNumberValidator(): ValidatorFn {
  return (control: AbstractControl): { [key: string]: any } => {
    const isPositive = Number(control.value) > 0;
    return isPositive ? null : { positive: { value: control.value } };
  };
}
