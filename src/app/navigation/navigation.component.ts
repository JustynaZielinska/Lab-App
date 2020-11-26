import { Component, DoCheck, OnInit  } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements DoCheck, OnInit {

constructor(public service: NavigationService, private currentRoute: Router) {}

isEnabled: boolean;
isHidden: boolean;
isDisabled : boolean;
pageTitle: 'Wybierz płeć' | 'Wpisz wyniki' | 'Interpretacja';
previousPath: 'home-page' | 'test-form-page';
isValid:  null | 'gender' | 'test' | 'lipids' | 'thyroid';
previousForm: null | 'gender-choice' | 'test-choice' | 'entering-results';
nextForm: null | 'gender-choice' | 'test-choice' | 'entering-results';
currentForm: null | 'gender-choice' | 'test-choice' | 'entering-results';

goBack(){
  this.service.changeIsValid(null);
}
changeCurrentForm(form){
  this.service.changeCurrentForm(form)
}

ngOnInit(){
  this.service.lastValidPage.subscribe(isValid => {this.isValid = isValid});
  this.service.currentForm.subscribe(currentForm => {this.currentForm = currentForm})
}

ngDoCheck() {
  if (this.currentRoute.url === '/home-page') {
    this.isHidden = true;
   }else if (this.currentRoute.url === '/test-form-page') { 
   this.isHidden = false;
   switch (this.currentForm) {
     case 'test-choice':
       this.previousPath = 'home-page';
       this.previousForm = null;
       this.nextForm = 'gender-choice';
       this.pageTitle = 'Wybierz płeć';
       if (this.isValid === 'test'){
         this.isEnabled = true;
       } else this.isEnabled = false
       break;
     case 'gender-choice':
       this.previousPath = 'test-form-page';
       this.previousForm = 'test-choice';
       this.nextForm = 'entering-results';
       this.pageTitle = 'Wpisz wyniki';
      if (this.isValid === 'gender'){
        this.isEnabled = true;
      } else this.isEnabled = false
      break;
      case 'entering-results':
        this.previousPath = 'test-form-page';
        this.previousForm = 'gender-choice';
        this.pageTitle = 'Interpretacja';
      if (this.isValid ===('lipids'||'thyroid')){
        this.isEnabled = true
      } else this.isEnabled = false
       break};
   } else this.isHidden = false;
 } 
}