import { Component, inject, signal } from '@angular/core';
import { Member } from '../member';
import { MemberService } from '../services/member-service';
import { RouterLink } from '@angular/router';
import { MemberSearch } from '../member-search/member-search';

@Component({
  selector: 'app-dashboard',
  imports: [RouterLink, MemberSearch],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.css',
})
export class Dashboard {
  members = signal<Member[]>([]);

  private memberService = inject(MemberService);

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers()
      .subscribe(members => {
        this.members.set(members.slice(0, 4))
    });
  }
}
