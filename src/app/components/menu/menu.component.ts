import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { trigger, transition, style, query, stagger, animate } from '@angular/animations';
import { NavigationService } from '../../core/services/navigation.service';

@Component({
  selector: 'app-menu',
  animations: [
    trigger('enterLeave', [
      transition( ':enter', [
        query('.menu__item', [
          style({opacity: 0, transform: 'translateY(-30px)'}),
          stagger(200, 
            animate('0.4s', style({opacity: 1, transform: 'translateY(0)'})))
        ])
      ]),
      transition( ':leave', [
        query('.menu__item', [
          style({opacity: 1, transform: 'translateY(0)'}),
          stagger(120, 
            animate('0.25s', style({opacity: 0, transform: 'translateY(-30px)'})))
        ])
      ])
    ])
  ],
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class SidebarComponent implements OnInit {

  constructor(private service: NavigationService) {}

  @Output() isMenuActive = new EventEmitter<boolean>();

  resetIsValid(): void{
    this.service.changeIsValid(null);
    this.service.changeCurrentForm('test-choice');
  }
  hideMenu(): void{
    this.isMenuActive.emit(false);
    this.service.hideNavigation(false);
  }

  ngOnInit(): void {

  }
}