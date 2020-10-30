import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-gender-choice-page',
  templateUrl: './gender-choice-page.component.html',
  styleUrls: ['./gender-choice-page.component.scss']
})
export class GenderChoicePageComponent {

  genderForm: FormGroup;
  gender: 'female' | 'male';

  constructor(private service: NavigationService) {
    // TODO: użyć walidacji np. Validators.required, valueChanges, .valid
    this.genderForm = new FormGroup({
      gender: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      ziemniak: new FormControl(null, [Validators.required]),
    });

    this.genderForm.valueChanges.subscribe((newFormValue => {
      if (this.genderForm.valid) {
        // TODO: przekazać parentowi nową wartość .emit Output
      }
    }));

   }

changeGender(choosenGender){
  this.gender = choosenGender;
  this.service.changeIsValid('gender');
}
}
