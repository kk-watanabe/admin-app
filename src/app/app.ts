import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Members } from "./members/members";

@Component({
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.css',
  imports: [Members]
})
export class App {
  title = '自社社員名簿';
}

