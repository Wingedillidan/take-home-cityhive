import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

type MessageResponse = {
  messages: {text: string}[]
}

@Injectable({
  providedIn: 'root'
})
export class MessageService {

  constructor(private http: HttpClient) {}

  getMessages(): Observable<MessageResponse> {
    return this.http.get<{messages: {text: string}[]}>('http://localhost:3000/messages', {withCredentials: true});
  }
}
