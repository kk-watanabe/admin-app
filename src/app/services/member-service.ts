import { Service } from '@angular/core';
import { Member } from '../member';
import { MEMBERS } from '../mock-members';

@Service()
export class MemberService {
    getMembers(): Member[] {
        return MEMBERS;
    }
}
