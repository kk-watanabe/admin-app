import { Component, inject } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../services/member-service';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  members: Member[] = [];

  private memberService = inject(MemberService);

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => this.members = members.slice(0, 4));
  }
}
