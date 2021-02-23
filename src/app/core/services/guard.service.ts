import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { CanDeactivate } from '@angular/router';
import { Observable} from "rxjs";
import { InterpretationComponent } from 'src/app/pages/interpretation/interpretation.component';


@Injectable({
  providedIn: 'root'
})
export class InterpretationGuard implements CanDeactivate<InterpretationComponent> {

  canDeactivate(
    component : InterpretationComponent,
    currentRoute : ActivatedRouteSnapshot,
    currentState : RouterStateSnapshot) : Promise<boolean> | Observable<boolean> | boolean {
      
    if (component.message != 'Ups... coś poszło nie tak. Wybierz badanie ponownie'){
      return confirm("Czy na pewno chcesz opuścić stronę i utracić interpretację?")
    } return true
  }
}