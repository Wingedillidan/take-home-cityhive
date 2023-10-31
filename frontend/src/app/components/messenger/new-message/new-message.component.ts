import { Component, inject } from '@angular/core';
import { MessageService } from 'src/app/services/message/message.service';

@Component({
  selector: 'app-new-message',
  templateUrl: './new-message.component.html',
  styleUrls: ['./new-message.component.scss']
})
export class NewMessageComponent {
  phoneNumber = ''
  text = ''
  messageService = inject(MessageService)

  sendMessage() {
    this.messageService.sendMessage(this.phoneNumber, this.text)
      .subscribe(
        () => this.messageService.getMessages().subscribe()
      );
  }

  clear() {
    this.phoneNumber = '';
    this.text = '';
  }
}
