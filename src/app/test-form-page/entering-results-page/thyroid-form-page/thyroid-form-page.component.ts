import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { positiveNumberValidator } from '../positive-number.module';
import { ITest } from '../InterfaceTest';

const tsh: ITest = {
  name: 'tsh',
  min: 0.27,
  max: 4.20,
  unit: 'mIU/ml'
};
const ft3: ITest = {
  name: 'ft3',
  min: 3.13,
  max: 6.76,
  unit: 'pmol/L'
};
const ft4: ITest = {
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
export class ThyroidFormPageComponent implements OnInit {

thyroidForm: FormGroup;
tsh: ITest;
ft3: ITest;
ft4: ITest;
results: ITest[];
alert: string;
@Output() validResults = new EventEmitter<string>();
@Output() thyroidResults = new EventEmitter<object>();

  constructor(private form: FormBuilder) {
  this.tsh = tsh;
  this.ft3 = ft3;
  this.ft4 = ft4;
}

ngOnInit(): void{
  this.alert = 'wypełnij wszystkie pola';
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

onChanges(): void{
  this.thyroidForm.valueChanges.subscribe(thyroid => {
    this.tsh.value = thyroid.tsh;
    this.ft3.value = thyroid.ft3;
    this.ft4.value = thyroid.ft4;
    if (((this.tsh.value === 0) || (this.tsh.value < 0)) ||
    ((this.ft3.value === 0) || (this.ft3.value < 0)) ||
    ((this.ft4.value === 0) || (this.ft4.value < 0))) {
    this.alert = 'wartość musi być większa niż 0';
  }else { this.alert = 'wypełnij wszystkie pola'; }
    this.validResults.emit(null);
    this.tsh.value = thyroid.tsh;
    this.ft3.value = thyroid.ft3;
    this.ft4.value = thyroid.ft4; });
}

submitThyroid(): void{
  this.validResults.emit('thyroid');
  this.results = [this.tsh, this.ft3, this.ft4];
  console.log(this.results);
  this.thyroidResults.emit(this.results);
}}
