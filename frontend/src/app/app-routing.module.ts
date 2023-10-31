import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MessengerPageComponent } from './components/messenger/page.component';
import { authGuard } from './services/auth/auth.guard';
import { SignInComponent } from './components/sign-in/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register/register.component';

const routes: Routes = [
  {path: 'messenger', component: MessengerPageComponent, canActivate: [authGuard]},
  {path: 'sign-in', component: SignInComponent},
  {path: 'register', component: RegisterComponent},
  {path: '', redirectTo: '/messenger', pathMatch: 'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
