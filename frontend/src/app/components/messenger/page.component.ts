import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-messenger-page',
  templateUrl: './page.component.html',
  styleUrls: ['./page.component.scss']
})
export class MessengerPageComponent {
  authService = inject(AuthService);
  router = inject(Router);

  logout() {
    this.authService.logout().subscribe(
      () => this.router.navigate(['/sign-in'])
    );
  }
}
