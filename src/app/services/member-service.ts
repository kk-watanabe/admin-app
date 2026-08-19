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
    private messageService = inject(Message);

    getMembers(): Observable<Member[]> {
        this.messageService.add('MemberService: 社員一覧データを取得しました。');
        return of([...MEMBERS]);
    }

    getMember(id: number): Observable<Member> {
        this.messageService.add(`MemberService: 社員データ(id=${id})を取得しました。`);
        return of(MEMBERS.find(member => member.id === id)!);
    }

    updateMember(member: Member): Observable<any> {
        const index = MEMBERS.findIndex(m => m.id === member.id);
        if (index !== -1) {
            MEMBERS[index] = member;
        }
        this.messageService.add(`MemberService: 社員データ(id=${member.id})を更新しました。`);
        return of(member);
    }

    addMember(name: string): Observable<Member> {
        const newMember: Member = {
            id: this.genId(),
            name: name
        };
        MEMBERS.push(newMember);
        this.messageService.add(`MemberService: 社員データ(id=${newMember.id})を追加しました。`);
        return of(newMember);
    }

    deleteMember(id: number): Observable<Member> {
        const index = MEMBERS.findIndex(m => m.id === id);
        const deleted = MEMBERS[index];
        if (index !== -1) {
            MEMBERS.splice(index, 1);
        }
        this.messageService.add(`MemberService: 社員データ(id=${id})を削除しました。`);
        return of(deleted);
    }

    searchMembers(term: string): Observable<Member[]> {
        if (!term.trim()) {
            return of([]);
        }
        const results = MEMBERS.filter(member =>
            member.name.includes(term)
        );
        this.messageService.add(`MemberService: "${term}"で検索しました。`);
        return of(results);
    }

    private genId(): number {
        return MEMBERS.length > 0
            ? Math.max(...MEMBERS.map(member => member.id)) + 1
            : 11;
    }
}
