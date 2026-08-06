import { Component, inject } from '@angular/core';
import { Member } from '../member';
import { FormsModule } from '@angular/forms';
import { MemberDetail } from '../member-detail/member-detail';
import { MemberService } from '../services/member-service';
import { Message } from '../services/message';
import { RouterLink } from "@angular/router";

@Component({
  selector: 'app-members',
  imports: [FormsModule, RouterLink],
  templateUrl: './members.html',
  styleUrl: './members.css',
})
export class Members {
  private memberService = inject(MemberService);

  members: Member[] = [];

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members);
  }
}
