import { Component, signal } from '@angular/core';
import { RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';
import { Members } from "./members/members";
import { Messages } from './messages/messages';

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Messages,
    RouterOutlet, RouterLink,
  ]
})
export class App {
  title = '自社社員名簿';
}

