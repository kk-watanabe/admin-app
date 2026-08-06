import { inject, Service } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../mock-members';
import { Observable, of } from 'rxjs';
import { Message } from './message';

@Service()
export class MemberService {
    private messageService = inject(Message);

    getMembers(): Observable<Member[]> {
        this.messageService.add('MemberService: 社員一覧データを取得しました。')
        return of(MEMBERS);
    }

    getMember(id: number): Observable<Member> {
        this.messageService.add(`MemberService: 社員データ(id=${id})を取得しました。`);
        return of(MEMBERS.find(member => member.id === id)!);
    }
}
