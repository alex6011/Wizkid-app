import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { WizkidsService } from './services/wizkids.service';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  constructor(private wizkidsService: WizkidsService, private router: Router) {}
  async canActivate(): Promise<boolean> {
    const authenticated = await this.wizkidsService.isLoggedIn();
    if (authenticated) {
      return true;
    } else {
      this.router.navigate(['/base']);
      return false;
      //   window.location.href = "/base";
    }
  }
}
