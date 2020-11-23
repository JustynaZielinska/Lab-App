import { Component, DoCheck, Input } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

interface Test{
  name: string;
  max?: number;
  min?: number;
  minFemale?: number;
  minMale?: number;
  unit: string
}  
const chol: Test ={
  name: 'chol',
  min: 115,
  max: 190,
  unit: 'mg/dl'
}
const hdl: Test ={
  name: 'hdl',
  minFemale: 45,
  minMale: 40,
  unit: 'mg/dl'
}
const ldl: Test ={
  name: 'ldl',
  max: 115,
  unit: 'mg/dl'
}
const nhdl: Test ={
  name: 'nhdl',
  max: 145,
  unit: 'mg/dl'
}
const tg: Test ={
  name: 'tg',
  max: 150,
  unit: 'mg/dl'
}

@Component({
  selector: 'app-lipids-form-page',
  templateUrl: './lipids-form-page.component.html',
  styleUrls: ['./lipids-form-page.component.scss']
})
export class LipidsFormPageComponent {

lipidsForm: FormGroup;
chol: Test;
hdl: Test;
ldl: Test;
nhdl: Test;
tg: Test;
@Input() gender;
isDisabled: boolean;
 
  constructor(form:FormBuilder) { 
    this.lipidsForm = form.group({
      chol: ['', Validators.min(0.0001)],
      hdl: ['', Validators.min(0.0001)],
      ldl: ['', Validators.min(0.0001)],
      nhdl: ['', Validators.min(0.0001)],
      tg: ['', Validators.min(0.0001)]
    })
    this.chol = chol;
    this.hdl = hdl;
    this.ldl = ldl;
    this.nhdl = nhdl;
    this.tg = tg;
} 
getRange(test):string{
if (test===chol)
return `${test.min} - ${test.max}`;
else if(test===hdl){
  if (this.gender === 'male')
  return `> ${test.minMale}`;
  else return `> ${test.minFemale}`;
} else return `< ${test.max}`;
}

ngDoCheck(){
  if (this.lipidsForm.pristine){
    this.isDisabled = true
  }else {if (((this.lipidsForm.controls['chol'].dirty && !(this.lipidsForm.controls['chol'].value>0)) ||
  (this.lipidsForm.controls['hdl'].touched && !(this.lipidsForm.controls['hdl'].value>0)) ||
  (this.lipidsForm.controls['ldl'].touched && !(this.lipidsForm.controls['ldl'].value>0)) ||
  (this.lipidsForm.controls['nhdl'].touched && !(this.lipidsForm.controls['nhdl'].value>0)) ||
  (this.lipidsForm.controls['tg'].touched && !(this.lipidsForm.controls['tg'].value>0)))){
    this.isDisabled = true
  }else this.isDisabled = false
}
}}