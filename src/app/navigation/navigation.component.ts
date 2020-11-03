import { Component, DoCheck, OnInit  } from '@angular/core';
import { NavigationService } from 'src/app/navigation.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements DoCheck, OnInit {

constructor(private service: NavigationService, private currentRoute: Router) {}

isEnabled: boolean;
isHidden: boolean;
isDisabled : boolean;
pageTitle: string;
previousPath: string;
isValid: string;
currentForm: null | 'gender-choice' | 'test-choice' | 'entering-results';
nextForm: null | 'gender-choice' | 'test-choice' | 'entering-results'

goBack(){
  this.service.changeIsValid(null);
}
changeCurrentForm(form){
  this.service.changeCurrentForm(form)
}
ngOnInit(){
  this.service.lastValidPage.subscribe(isValid => {this.isValid= isValid});
}

ngDoCheck() {
  if (this.currentRoute.url === '/home-page') {
    this.isHidden = true;
   }else if (this.currentRoute.url === '/test-form-page') { 
   this.isHidden = false;
   this.previousPath === '/home-page';
   switch (this.currentForm) {
     case 'test-choice':
       if (this.isValid === 'test'){
         this.isEnabled = true
         this.nextForm === 'gender-choice';
       } else this.isEnabled = false;
       this.pageTitle === 'Wybierz płeć';
       this.goBack();
       break;
     case 'gender-choice':
      if (this.isValid === 'gender'){
        this.isEnabled = true
      } else this.isEnabled = false;
      this.nextForm === 'entering-results';
       this.pageTitle === 'Wpisz wyniki';
       this.goBack();
       break;
      case 'entering-results':
      if (this.isValid ==='results'){
        this.isEnabled = true
      } else this.isEnabled = false;
       this.pageTitle === 'Interpretacja';
       this.goBack();
       break}
   } else this.isHidden = false;
      this.goBack();
      this.previousPath === '/home-page';
 }
}