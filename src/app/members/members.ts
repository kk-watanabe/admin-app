import { Component } from '@angular/core';
import { Member } from '../member';
import { FormsModule } from '@angular/forms';
import { MEMBERS } from '../mock-members';

@Component({
  selector: 'app-members',
  imports: [FormsModule],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {

  members = MEMBERS;
  member: Member = {
    id: 1,
    name: '田中太郎',
  };
  selectedMember?: Member;

  constructor() { }

  onSelect(member: Member): void {
    this.selectedMember = member;
  }
}
