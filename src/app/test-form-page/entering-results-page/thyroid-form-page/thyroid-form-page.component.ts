import { Component, OnInit,  DoCheck, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { positiveNumberValidator } from '../positive-number.module';

interface Test{
  name: string;
  min: number;
  max: number;
  value?: number;
  unit: string;
}
const tsh: Test = {
  name: 'tsh',
  min: 0.27,
  max: 4.20,
  unit: 'mIU/ml'
};
const ft3: Test = {
  name: 'ft3',
  min: 3.13,
  max: 6.76,
  unit: 'pmol/L'
};
const ft4: Test = {
  name: 'ft4',
  min: 12,
  max: 22,
  unit: 'pmol/L'
};

@Component({
  selector: 'app-thyroid-form-page',
  templateUrl: './thyroid-form-page.component.html',
  styleUrls: ['./thyroid-form-page.component.scss']
})
export class ThyroidFormPageComponent implements OnInit, DoCheck {

thyroidForm: FormGroup;
tsh: Test;
ft3: Test;
ft4: Test;
alert: string;
@Output() validResults = new EventEmitter<string>();
@Output() thyroidResults = new EventEmitter<object>();

  constructor(private form: FormBuilder) {
  this.tsh = tsh;
  this.ft3 = ft3;
  this.ft4 = ft4;
}

ngOnInit(): void{
  this.thyroidForm = this.form.group({
    tsh: [null, Validators.compose([Validators.required, positiveNumberValidator()])],
    ft3: [null, Validators.compose([Validators.required, positiveNumberValidator()])],
    ft4: [null, Validators.compose([Validators.required, positiveNumberValidator()])],
  });
  this.onChanges();
}

getRange(test): string{
return `${test.min} - ${test.max}`;
}

ngDoCheck(): void{
  if (((this.tsh.value === 0) || (this.tsh.value < 0)) ||
  ((this.ft3.value === 0) || (this.ft3.value < 0)) ||
  ((this.ft4.value === 0) || (this.ft4.value < 0))) {
  this.alert = 'wartość musi być większa niż 0';
  }
  else { this.alert = 'wypełnij wszystkie pola'; }
  this.validResults.emit(null);
}

onChanges(): void{
  this.thyroidForm.valueChanges.subscribe(thyroid => {
    this.tsh.value = thyroid.tsh;
    this.ft3.value = thyroid.ft3;
    this.ft4.value = thyroid.ft4;
  });
}

submitThyroid(): void{
  this.validResults.emit('thyroid');
  this.thyroidResults.emit(this.thyroidForm.value);
}}
