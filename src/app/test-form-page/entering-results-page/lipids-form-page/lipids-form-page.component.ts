import { Component, DoCheck, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { positiveNumberValidator } from '../positive-number.directive';

interface Test{
  name: string;
  max?: number;
  min?: number;
  minFemale?: number;
  minMale?: number;
  value?: number;
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
export class LipidsFormPageComponent implements OnInit, DoCheck{

lipidsForm: FormGroup;
chol: Test;
hdl: Test;
ldl: Test;
nhdl: Test;
tg: Test;
isDisabled: boolean;
@Input() gender;
@Output() validResults= new EventEmitter<string>();
@Output() cholResult= new EventEmitter<number>();
@Output() hdlResult= new EventEmitter<number>();
@Output() ldlResult= new EventEmitter<number>();
@Output() nhdlResult= new EventEmitter<number>();
@Output() tgResult= new EventEmitter<number>();
 
  constructor(private form:FormBuilder) {
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

ngOnInit(){
  this.lipidsForm = this.form.group({
    chol: ['', positiveNumberValidator()],
    hdl: ['', positiveNumberValidator()],
    ldl: ['', positiveNumberValidator()],
    nhdl: ['', positiveNumberValidator()],
    tg: ['', positiveNumberValidator()]
  });
  this.onChanges()
}

ngDoCheck(){
  if (this.lipidsForm.pristine)
    this.isDisabled = true;
  else if(((this.chol.value === 0) || (this.chol.value < 0)) || 
  ((this.hdl.value === 0) || (this.hdl.value < 0)) ||
  ((this.ldl.value === 0) || (this.ldl.value < 0)) ||
  ((this.nhdl.value === 0) || (this.nhdl.value < 0)) ||
  ((this.tg.value === 0) || (this.tg.value < 0)))
  this.isDisabled = true;
  else this.isDisabled = false;
  this.validResults.emit(null)
}
onChanges(): void {
  this.lipidsForm.valueChanges.subscribe(lipids => {
    this.chol.value = lipids.chol;
    this.hdl.value = lipids.hdl;
    this.ldl.value = lipids.ldl;
    this.nhdl.value = lipids.nhdl;
    this.tg.value = lipids.tg
  })}

submitLipids(){
  this.validResults.emit('lipids');
}}