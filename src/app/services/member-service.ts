import { inject, Injectable } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../mock-members';
import { Observable, of } from 'rxjs';
import { Message } from './message';
import { HttpClient } from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class MemberService {
    private membersUrl = 'api/members';

    private http = inject(HttpClient);
    private messageService = inject(Message);

    getMembers(): Observable<Member[]> {
        this.messageService.add('MemberService: 社員一覧データを取得しました。');
        return this.http.get<Member[]>(this.membersUrl);
    }

    getMember(id: number): Observable<Member> {
        this.messageService.add(`MemberService: 社員データ(id=${id})を取得しました。`);
        return of(MEMBERS.find(member => member.id === id)!);
    }

    private log(message: string) {
        this.messageService.add(`MemeberService: ${message}`);
    }
}
