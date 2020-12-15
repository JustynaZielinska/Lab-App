import { Component, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gender-choice-page',
  templateUrl: './gender-choice-page.component.html',
  styleUrls: ['./gender-choice-page.component.scss'],
})
export class GenderChoicePageComponent {

  genderForm: FormGroup;
  gender: null|'male'|'female';
  @Output() selectedGender = new EventEmitter<string>();


  constructor() {
    this.genderForm = new FormGroup({
      gender: new FormControl()
    }); }

   changeGender(gender): void{
    this.gender = gender;
    this.selectedGender.emit(gender);
}}
