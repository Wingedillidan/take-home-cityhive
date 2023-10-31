import { Component, inject } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.scss']
})
export class MessageListComponent {
  messageService = inject(MessageService);

  constructor() {
    this.load();
  }

  load() {
    this.messageService.getMessages()
      .subscribe()
  }
}
