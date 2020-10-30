import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-gender-choice-page',
  templateUrl: './gender-choice-page.component.html',
  styleUrls: ['./gender-choice-page.component.scss']
})
export class GenderChoicePageComponent implements OnInit {

  genderForm: FormGroup;
  isMale: boolean;
  isFemale: boolean;
  constructor() {
    this.genderForm = new FormGroup({
      gender: new FormControl()
    });
   }

  ngOnInit(): void {
  }

}
