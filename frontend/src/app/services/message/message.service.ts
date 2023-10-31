import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { DateTime } from 'luxon';

type MessageResponse = {
  text: string,
  phone_number: string,
  created_at: string,
}

type MessageResponseBody = {
  messages: MessageResponse[];
}


type Message = {
  text: string;
  phoneNumber: string;
  createdAt: string;
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {
  public messages: Message[] = [];

  constructor(private http: HttpClient) {}

  getMessages(): Observable<MessageResponseBody> {
    return this.http.get<MessageResponseBody>('http://localhost:3000/messages', {withCredentials: true})
      .pipe(tap(response => {
        this.messages = response.messages.map(message => ({
          phoneNumber: message.phone_number,
          text: message.text,
          createdAt: DateTime.fromISO(message.created_at).toFormat("cccc d-LLLL-yy TTT"),
        }));
      }));
  }

  sendMessage(phoneNumber: string, text: string) {
    return this.http.post('http://localhost:3000/messages', null, {
      withCredentials: true,
      params: {
        phone_number: phoneNumber,
        text,
      }
    })
  }
}
