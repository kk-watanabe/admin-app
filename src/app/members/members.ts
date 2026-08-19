import { Component, inject, signal } from '@angular/core';
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

  members = signal<Member[]>([]);

  ngOnInit(): void {
    this.getMembers();
  }

  getMembers(): void {
    this.memberService.getMembers().subscribe({
      next: (members) => {
        console.log('取得データ:', members); // ← ログを追加
        this.members.set(members);
      },
      error: (err) => {
        console.error('通信エラー:', err); // ← エラーログを追加
      }
    });
  }

  add(name:string): void {
      name = name.trim();
      if (!name) {
          return;
      }
      this.memberService.addMember(name).subscribe(member => {
          this.members.update(members => [...members, member]);
      });
  }

  delete(member: Member): void {
      this.members.update(members => members.filter(m => m.id !== member.id));
      this.memberService.deleteMember(member.id).subscribe();
  }
}
