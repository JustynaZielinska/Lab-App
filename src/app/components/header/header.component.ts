import { Component } from '@angular/core';
import { NavigationService } from '../../core/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
 })

export class HeaderComponent{

constructor(private navigationService: NavigationService) {}
isMenuActive = false;

resetIsValid(): void{
  this.navigationService.changeIsValid(null);
}
hideMenu(event): void{
  this.isMenuActive = event;
}
hideNavbar(): void{
  this.navigationService.hideNavigation(this.isMenuActive);
}
}
