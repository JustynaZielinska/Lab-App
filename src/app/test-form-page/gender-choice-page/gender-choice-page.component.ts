import { Component, EventEmitter, Output, Input } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gender-choice-page',
  templateUrl: './gender-choice-page.component.html',
  styleUrls: ['./gender-choice-page.component.scss'],
})
export class GenderChoicePageComponent {

  genderForm: FormGroup;
  @Input() gender;
  @Output() selectedGender= new EventEmitter<string>();

  constructor() {
    this.genderForm = new FormGroup({
      gender: new FormControl()
    });}

   changeGender(gender){
    this.gender = gender;
      this.selectedGender.emit(gender);
}}