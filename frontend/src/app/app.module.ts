import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {HttpClientModule} from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SignInComponent } from './components/sign-in/sign-in/sign-in.component';
import { RegisterComponent } from './components/register/register/register.component';
import { MessengerPageComponent } from './components/messenger/page.component';
import { MessageListComponent } from './components/messenger/message-list/message-list.component';
import { NewMessageComponent } from './components/messenger/new-message/new-message.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    SignInComponent,
    RegisterComponent,
    MessengerPageComponent,
    MessageListComponent,
    NewMessageComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
