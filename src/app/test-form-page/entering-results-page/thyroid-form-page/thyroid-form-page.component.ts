import { Component, DoCheck } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Test{
  name: string;
  min: number;
  max: number;
  unit: string
}  
const tsh: Test ={
  name: 'tsh',
  min: 0.27,
  max: 4.20,
  unit: 'mIU/ml'
}
const ft3: Test ={
  name: 'ft3',
  min: 3.13,
  max: 6.76,
  unit: 'pmol/L'
}
const ft4: Test ={
  name: 'ft4',
  min: 12,
  max: 22,
  unit: 'pmol/L'
}

@Component({
  selector: 'app-thyroid-form-page',
  templateUrl: './thyroid-form-page.component.html',
  styleUrls: ['./thyroid-form-page.component.scss']
})
export class ThyroidFormPageComponent implements DoCheck {

thyroidForm: FormGroup;
tsh: Test;
ft3: Test;
ft4: Test;
alert: string;

  constructor(form:FormBuilder) { 
    this.thyroidForm = form.group({
      tsh: ['', Validators.compose([Validators.required, Validators.min(0.0001)])],
      ft3: ['', Validators.compose([Validators.required, Validators.min(0.0001)])],
      ft4: ['', Validators.compose([Validators.required, Validators.min(0.0001)])],
    })
  this.tsh = tsh;
  this.ft3 = ft3;
  this.ft4 = ft4;
} 
getRange(test):string{
return `${test.min} - ${test.max}`
}

ngDoCheck(){
if((this.thyroidForm.controls['tsh'].value === null)||
(this.thyroidForm.controls['ft3'].value === null) ||
(this.thyroidForm.controls['ft4'].value === null))
this.alert = "wypełnij wszystkie pola";
else if((this.thyroidForm.controls['tsh'].dirty && !(this.thyroidForm.controls['tsh'].value > 0)) ||
(this.thyroidForm.controls['ft3'].dirty && !(this.thyroidForm.controls['ft3'].value > 0)) ||
(this.thyroidForm.controls['ft4'].dirty && !(this.thyroidForm.controls['ft4'].value > 0))
) this.alert = "wartość musi być większa niż 0";
else this.alert = "wypełnij wszystkie pola"
}}
