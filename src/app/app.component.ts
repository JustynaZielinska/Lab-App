import { Component } from '@angular/core';
import { trigger, transition, style, query, animate, group } from '@angular/animations';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('routerAnimation', [
      transition('1 => 2, 2 => 3', [
          query(':enter', style({ opacity: 0, transform: 'translateX(50%)' })),
          query(':leave', style({ opacity: 1, transform: 'translateX(0)' })),
          query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
          group([
              query(':leave', [
                  animate('0.4s', style({ opacity: 0, transform: 'translateX(-50%)' })),
              ]),
              query(':enter', [
                animate('0.4s', style({ opacity: 1, transform: 'translateX(0)' })),
          ]),
      ]),
  ]),
  transition('2 => 1, 3 => 2', [
    query(':enter', style({ opacity: 1, transform: 'translateX(-50%)' })),
    query(':leave', style({ opacity: 0, transform: 'translateX(0)' })),
    query(':enter, :leave', style({ position: 'absolute', top: 0, left: 0, right: 0 })),
    group([
        query(':leave', [
            animate('0.4s', style({ opacity: 1, transform: 'translateX(50%)' })),
        ]),
        query(':enter', [
          animate('0.4s', style({ opacity: 0, transform: 'translateX(0)' })),
    ]),
]),
])
])
],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  getDepth(outlet){
    return outlet.activatedRouteData['depth']
  }
}
