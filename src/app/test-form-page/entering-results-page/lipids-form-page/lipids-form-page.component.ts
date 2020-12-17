import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ITest } from '../InterfaceTest';

const chol: ITest = {
  name: 'Cholesterol',
  min: 115,
  max: 190,
  unit: 'mg/dl',
};
const hdl: ITest = {
  name: 'Cholesterol HDL',
  minFemale: 45,
  minMale: 40,
  unit: 'mg/dl',
};
const ldl: ITest = {
  name: 'Cholesterol LDL',
  max: 115,
  unit: 'mg/dl'
};
const tg: ITest = {
  name: 'Triglicerydy',
  max: 150,
  unit: 'mg/dl'
};

@Component({
  selector: 'app-lipids-form-page',
  templateUrl: './lipids-form-page.component.html',
  styleUrls: ['./lipids-form-page.component.scss']
})
export class LipidsFormPageComponent implements OnInit {

lipidsForm: FormGroup;
chol: ITest;
hdl: ITest;
ldl: ITest;
tg: ITest;
results: ITest[];
isDisabled: boolean;
@Input() gender;
@Output() validTest = new EventEmitter<string>();
@Output() submitLipidsResults = new EventEmitter<ITest[]>();

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
    chol: [null, Validators.compose([Validators.min(1), Validators.max(9999)])],
    hdl: [null, Validators.compose([Validators.min(1), Validators.max(9999)])],
    ldl: [null, Validators.compose([Validators.min(1), Validators.max(9999)])],
    tg: [null,  Validators.compose([Validators.min(1), Validators.max(9999)])],
  });
  this.onChanges();
  this.isDisabled = true;
}

onChanges(): void {
  this.lipidsForm.valueChanges.subscribe(lipids => {
  if ((lipids.chol === null) && (lipids.hdl === null) && (lipids.ldl === null) && (lipids.tg === null)){
    this.isDisabled = true;
  } else if ((lipids.chol === 0 ) || (lipids.hdl === 0) || (lipids.ldl === 0 ) || (lipids.tg === 0)){
    this.isDisabled = true;
  } else if ((lipids.chol < 0 ) || (lipids.hdl < 0) || (lipids.ldl < 0 ) || (lipids.tg < 0)){
      this.isDisabled = true;
  } else if (this.lipidsForm.invalid){
      this.isDisabled = true;
  } else {this.isDisabled = false; }
  this.validTest.emit(null);
  this.chol.value = lipids.chol;
  this.hdl.value = lipids.hdl;
  this.ldl.value = lipids.ldl;
  this.tg.value = lipids.tg;
 }); }

submitLipids(): void{
  this.validTest.emit('lipids');
  this.results = [this.chol, this.hdl, this.ldl, this.tg];
  this.submitLipidsResults.emit(this.results);
}}
