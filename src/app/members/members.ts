import { Component } from '@angular/core';
import { Member } from '../member';
import { FormsModule } from '@angular/forms';
import { MEMBERS } from '../mock-members';
import { MemberDetail } from '../member-detail/member-detail';

@Component({
  selector: 'app-members',
  imports: [FormsModule, MemberDetail],
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
