import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { NavigationService } from 'src/app/navigation.service';

@Component({
  selector: 'app-gender-choice-page',
  templateUrl: './gender-choice-page.component.html',
  styleUrls: ['./gender-choice-page.component.scss']
})
export class GenderChoicePageComponent {

  genderForm: FormGroup;
  gender : 'female' | 'male';
  
  constructor(private service:NavigationService) {
    this.genderForm = new FormGroup({
      gender: new FormControl()
    });
   }
   
changeGender(choosenGender){
  this.gender = choosenGender;
  this.service.changeIsValid('gender');
}
}
