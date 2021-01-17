import { Component } from '@angular/core';
import { NavigationService } from '../core/services/navigation.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
 })

export class HeaderComponent{

constructor(private service: NavigationService) {}
isActive = false;

goBack(): void{
  this.service.changeIsValid(null);
}
}
