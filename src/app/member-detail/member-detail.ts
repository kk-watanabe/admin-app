import { Component, Input, inject } from '@angular/core';
import { Member } from '../member';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { MemberService } from '../services/member-service';
import { Location } from '@angular/common';

@Component({
  selector: 'app-member-detail',
  imports: [FormsModule],
  templateUrl: './member-detail.html',
  styleUrl: './member-detail.css',
})
export class MemberDetail {
  @Input() member?: Member;

  private route = inject(ActivatedRoute);
  private memberService = inject(MemberService);
  private location = inject(Location);

  ngOnInit(): void {
    this.getMember();
  }

  getMember(): void {
    const id = +this.route.snapshot.paramMap.get('id')!;
    this.memberService.getMember(id)
      .subscribe(member => this.member = member);
  }

  goBack(): void {
    this.location.back();
  }

  save(): void {
    if (!this.member) {
      return;
    }
    this.memberService.updateMember(this.member)
      .subscribe(() => this.goBack());
  }
}
