import { Component, inject } from '@angular/core';
import { Member } from '../member';
import { FormsModule } from '@angular/forms';
import { MemberDetail } from '../member-detail/member-detail';
import { MemberService } from '../services/member-service';

@Component({
  selector: 'app-members',
  imports: [FormsModule, MemberDetail],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {
  private memberService = inject(MemberService);

  members: Member[] = this.memberService.getMembers();
  selectedMember?: Member;

  onSelect(member: Member): void {
    this.selectedMember = member;
  }
}
