import { Component, Input } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

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
export class ThyroidFormPageComponent {

@Input() currentTest

thyroidForm: FormGroup;
tsh: Test;
ft3: Test;
ft4: Test;

  constructor(form:FormBuilder) { 
    this.thyroidForm = form.group({
      tsh: [''],
      ft3: [''],
      ft4: ['']
    })
  this.tsh = tsh;
  this.ft3 = ft3;
  this.ft4 = ft4;
} 
getRange(test):string{
return `${test.min} - ${test.max}`
}
}
