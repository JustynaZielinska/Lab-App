import { Component, DoCheck, OnInit  } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements DoCheck, OnInit {

constructor(public service: NavigationService, private currentRoute: Router) {}

isEnabled: boolean;
isHidden: boolean;
isDisabled: boolean;
pageTitle: 'Wybierz badanie' | 'Wybierz płeć' | 'Wpisz wyniki' | 'Interpretacja' | 'Wybierz badanie ponownie';
previousPath: 'home-page' | 'test-form-page';
nextPath: 'test-form-page' | 'interpretation';
isValid: null | 'gender' | 'test' | 'lipids' | 'thyroid';
previousForm: null | 'gender-choice' | 'test-choice' | 'entering-results';
nextForm: null | 'gender-choice' | 'test-choice' | 'entering-results';
currentForm: null | 'gender-choice' | 'test-choice' | 'entering-results';

goBack(): void {
  this.service.changeIsValid(null);
}

changeCurrentForm(form): void{
  this.service.changeCurrentForm(form);
}

ngOnInit(): void{
  this.service.lastValidPage.subscribe(isValid => {this.isValid = isValid; });
  this.service.currentForm.subscribe(currentForm => {this.currentForm = currentForm;})
}

ngDoCheck(): void{
  if (this.currentRoute.url === '/home-page') {
    this.pageTitle = 'Wybierz badanie';
    this.isHidden = true;
   }else if (this.currentRoute.url === '/test-form-page') {
   this.isHidden = false;
   switch (this.currentForm) {
     case 'test-choice':
       this.previousPath = 'home-page';
       this.previousForm = null;
       this.nextPath = 'test-form-page';
       this.nextForm = 'gender-choice';
       this.pageTitle = 'Wybierz płeć';
       if (this.isValid === 'test'){
         this.isEnabled = true;
       } else { this.isEnabled = false; }
       break;
     case 'gender-choice':
       this.previousPath = 'test-form-page';
       this.previousForm = 'test-choice';
       this.nextPath = 'test-form-page';
       this.nextForm = 'entering-results';
       this.pageTitle = 'Wpisz wyniki';
       if (this.isValid === 'gender'){
        this.isEnabled = true;
      } else { this.isEnabled = false; }
       break;
      case 'entering-results':
        this.previousPath = 'test-form-page';
        this.previousForm = 'gender-choice';
        this.nextPath = 'interpretation';
        this.pageTitle = 'Interpretacja';
        if ((this.isValid === 'lipids') || (this.isValid === 'thyroid')){
        this.isEnabled = true;
      } else { this.isEnabled = false; }
        break; }
   } else if (this.currentRoute.url === '/interpretation') {
    this.isHidden = true;
    this.pageTitle = 'Wybierz badanie ponownie';
  }else { this.isHidden = false; }
 }
}
