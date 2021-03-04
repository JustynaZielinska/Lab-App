import { Component } from '@angular/core';
import { trigger, transition, style, query, animate, group } from '@angular/animations';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  animations: [
    trigger('routerAnimation', [
      transition('1 => 2, 2 => 3', [
          query(':enter', style({ transform: 'translateX(50%)', opacity: 0 })),
          query(':leave', style({ transform: 'translateX(0)', opacity: 1 })),
          query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0 })),
          group([
              query(':leave', [
                  animate('0.4s', style({ transform: 'translateX(-50%)', opacity: 0 })),
              ]),
              query(':enter', [
                animate('0.4s', style({ transform: 'translateX(0)', opacity: 1 })),
          ]),
      ]),
  ]),
  transition('2 => 1, 3 => 2', [
    query(':enter', style({ transform: 'translateX(-50%)', opacity: 0 })),
    query(':leave', style({ transform: 'translateX(0)', opacity: 1 })),
    query(':enter, :leave', style({ position: 'fixed', left: 0, right: 0 })),
    group([
        query(':leave', [
            animate('0.4s', style({ transform: 'translateX(50%)', opacity: 0 })),
        ]),
        query(':enter', [
          animate('0.4s', style({ transform: 'translateX(0)', opacity: 1 })),
    ]),
]),
])
])
],
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  getDepth(outlet: RouterOutlet): RouterOutlet{
    return outlet.activatedRouteData.depth;
  }
}
