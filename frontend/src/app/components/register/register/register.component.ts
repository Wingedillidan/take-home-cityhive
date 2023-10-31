import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent {
  email = '';
  password = '';
  passwordConfirmation = '';
  authService = inject(AuthService);
  router = inject(Router);

  register() {
    this.authService.register(this.email, this.password, this.passwordConfirmation)
      .subscribe({
        next: () => this.router.navigate(['/sign-in'])
      })
  }
}
