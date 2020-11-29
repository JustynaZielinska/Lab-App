import { Component, DoCheck, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';

interface Test{
  name: string;
  max?: number;
  min?: number;
  minFemale?: number;
  minMale?: number;
  value?: number;
  unit: string;
}
const chol: Test = {
  name: 'chol',
  min: 115,
  max: 190,
  unit: 'mg/dl'
};
const hdl: Test = {
  name: 'hdl',
  minFemale: 45,
  minMale: 40,
  unit: 'mg/dl'
};
const ldl: Test = {
  name: 'ldl',
  max: 115,
  unit: 'mg/dl'
};
const tg: Test = {
  name: 'tg',
  max: 150,
  unit: 'mg/dl'
};

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
tg: Test;
isDisabled: boolean;
@Input() gender;
@Output() validResults = new EventEmitter<string>();
@Output() lipidsResults = new EventEmitter<object>();

constructor(private form: FormBuilder) {
  this.chol = chol;
  this.hdl = hdl;
  this.ldl = ldl;
  this.tg = tg;
}

getRange(test): string{
  if (test === chol){
  return `${test.min} - ${test.max}`;
} else if (test === hdl){
    if (this.gender === 'male'){
    return `> ${test.minMale}`;
  } else { return `> ${test.minFemale}`; }
  } else { return `< ${test.max}`; }
  }

ngOnInit(): void {
  this.lipidsForm = this.form.group({
    chol: [null],
    hdl: [null],
    ldl: [null],
    tg: [null],
  });
  this.onChanges();
}

ngDoCheck(): void{
  if (this.lipidsForm.pristine){
    this.isDisabled = true; }
  this.validResults.emit(null);
 }

onChanges(): void {
  this.lipidsForm.valueChanges.subscribe(lipids => {
  if ((lipids.chol === null) && (lipids.hdl === null) && (lipids.ldl === null) && (lipids.tg === null)){
    this.isDisabled = true;
  } else if ((lipids.chol === 0 ) || (lipids.hdl === 0) || (lipids.ldl === 0 ) || (lipids.tg === 0)){
    this.isDisabled = true;
  }  else if ((lipids.chol < 0 ) || (lipids.hdl < 0) || (lipids.ldl < 0 ) || (lipids.tg < 0)){
      this.isDisabled = true;
  } else {this.isDisabled = false; }
 }); }

submitLipids(): void{
  this.validResults.emit('lipids');
  this.lipidsResults.emit(this.lipidsForm.value);
}}
