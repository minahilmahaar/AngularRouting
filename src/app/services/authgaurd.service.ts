import { inject, Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate,CanActivateChild,CanDeactivate,GuardResult,MaybeAsync,Router,RouterStateSnapshot } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from './auth.service';
import { ContactComponent } from '../contact/contact.component';

export interface IDeactivateComponent{
    canExit: () => 
        boolean | Observable<boolean> | Promise<boolean>;
    
}

@Injectable({
  providedIn: 'root'
})
export class AuthGaurdService implements CanActivate, CanActivateChild, CanDeactivate<ContactComponent> {
authService: AuthService = inject(AuthService);
router:Router = inject(Router);
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): boolean | Observable<boolean> | Promise<boolean> {

   if(this.authService.isLoggedIn()){
    return true;
   }else{
    this.router.navigate(['/Login']);
    return false;
   }
  }
  canActivateChild(childRoute: ActivatedRouteSnapshot, state: RouterStateSnapshot): MaybeAsync<GuardResult> {
     return this.canActivate(childRoute, state);
  }
  canDeactivate(component: IDeactivateComponent, currentRoute: ActivatedRouteSnapshot, currentState: RouterStateSnapshot, nextState: RouterStateSnapshot): MaybeAsync<GuardResult> {
      return component.canExit();
  }
}
