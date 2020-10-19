import { Component, DoCheck } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrls: ['./navigation.component.scss']
})
export class NavigationComponent implements DoCheck {

  constructor(private currentRoute: Router) {
  }

isHidden: boolean;
nextPath: string;
pageTitle: string;
previousPath: string;

  ngDoCheck() {
   if (this.currentRoute.url == '/home-page') {
     this.isHidden = true
    }else this.isHidden = false;
    switch (this.currentRoute.url) {
      case '/test-choice-page':
        this.pageTitle = 'Wybierz płeć';
        this.previousPath = '/home-page'
        this.nextPath = '/test-form-page'
        break;
      case '/test-form-page':
        this.pageTitle = 'Wpisz wyniki';
        this.previousPath ='test-choice-page'
        break
    } 
  }
}