import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { positiveNumberValidator } from '../../../../core/services/positive-number-validator.module';
import { ITest } from 'src/app/core/interfaces/InterfaceTest';

const chol: ITest = {
  name: 'Cholesterol',
  min: 115,
  max: 190,
  unit: 'mg/dl',
};
const hdl: ITest = {
  name: 'Cholesterol HDL',
  min: 40 || 45,
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
  templateUrl: './lipids-form.component.html',
  styleUrls: ['./lipids-form.component.scss']
})
export class LipidsFormComponent implements OnInit {

lipidsForm: FormGroup;
chol: ITest;
hdl: ITest;
ldl: ITest;
tg: ITest;
results: ITest[];
alert: string;
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
    return `> 40`;
  } else { return `> 45`; }
  } else { return `< ${test.max}`; }
  }

ngOnInit(): void {
  this.alert = 'Wypełnij wszystkie pola';
  this.lipidsForm = this.form.group({
    chol: [null, Validators.compose([Validators.required, Validators.max(9999), positiveNumberValidator()])],
    hdl: [null, Validators.compose([Validators.required, Validators.max(9999), positiveNumberValidator()])],
    ldl: [null, Validators.compose([Validators.required, Validators.max(9999), positiveNumberValidator()])],
    tg: [null,  Validators.compose([Validators.required, Validators.max(9999), positiveNumberValidator()])],
  });
  this.onChanges();
}

onChanges(): void {
  this.lipidsForm.valueChanges.subscribe(lipids => {
    this.chol.value = lipids.chol;
    this.hdl.value = lipids.hdl;
    this.ldl.value = lipids.ldl;
    this.tg.value = lipids.tg;
    if (((this.chol.value === 0) || (this.chol.value < 0)) ||
    ((this.hdl.value === 0) || (this.hdl.value < 0)) ||
    ((this.ldl.value === 0) || (this.ldl.value < 0)) ||
    ((this.tg.value === 0) || (this.tg.value < 0))) {
    this.alert = 'Wartość musi być większa niż 0';
  }else { this.alert = 'Wypełnij wszystkie pola'; }
    this.validTest.emit(null);
 }); }

submitLipids(): void{
  this.validTest.emit('lipids');
  this.results = [this.chol, this.hdl, this.ldl, this.tg];
  this.submitLipidsResults.emit(this.results);
}}
