import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
 
  constructor(form:FormBuilder) { 
    this.lipidsForm = form.group({
      chol: [''],
      hdl: [''],
      ldl: [''],
      nhdl: [''],
      tg: ['']
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
}