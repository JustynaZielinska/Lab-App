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
nextPath: string;
pageTitle: string;
previousPath: string;
isValid: string;

goBack(){
  this.service.changeIsValid(null);
}
ngOnInit(){
  this.service.lastValidPage.subscribe(isValid => {this.isValid= isValid});
}

ngDoCheck() {
  if (this.currentRoute.url == '/home-page') {
    this.isHidden = true
   }else this.isHidden = false;
   switch (this.currentRoute.url) {
     case '/test-choice-page':
       if (this.isValid == 'test'){
         this.isEnabled = true
       } else this.isEnabled = false;
       this.pageTitle = 'Wybierz płeć';
       this.previousPath = '/home-page';
       this.nextPath = '/gender-choice-page';
       this.goBack();
       break;
     case '/gender-choice-page':
      if (this.isValid == 'gender'){
        this.isEnabled = true
      } else this.isEnabled = false;
       this.pageTitle = 'Wpisz wyniki';
       this.previousPath ='test-choice-page';
       this.goBack();
       break;
      default: this.goBack();
      this.previousPath ='home-page';
   } 
 }
}