import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.scss']
})
export class SignInComponent {
  email = ''
  password = ''
  authService = inject(AuthService);
  router = inject(Router);

  constructor() {
    this.authService.check()
      .subscribe({
        next: () => this.router.navigate(['/messenger'])
      })
  }

  login() {
    this.authService.login(this.email, this.password)
      .subscribe({
        next: () => this.router.navigate(['/messenger'])
      })
  }
}
