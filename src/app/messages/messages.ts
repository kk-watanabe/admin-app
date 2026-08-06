import { Component, inject } from '@angular/core';
import { Message } from '../services/message';

@Component({
  selector: 'app-messages',
  imports: [],
  templateUrl: './messages.html',
  styleUrl: './messages.css',
})
export class Messages {
  public messageService = inject(Message);
}
