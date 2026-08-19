import { Component, inject } from '@angular/core';
import { MemberService } from '../services/member-service';
import { Observable, Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap } from 'rxjs/operators';
import { Member } from '../member';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-member-search',
  imports: [CommonModule, RouterLink],
  templateUrl: './member-search.html',
  styleUrl: './member-search.css',
})
export class MemberSearch {
  private memberService = inject(MemberService);

  private searchTerms = new Subject<string>();
  members$!: Observable<Member[]>;

  search(term: string): void {
    this.searchTerms.next(term);
  }

  ngOnInit(): void {
    this.members$ = this.searchTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string) => this.memberService.searchMembers(term))
    );
  }
}
