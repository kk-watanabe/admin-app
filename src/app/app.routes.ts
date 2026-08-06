import { Routes } from '@angular/router';
import { Members } from './members/members';
import { Dashboard } from './dashboard/dashboard';
import { MemberDetail } from './member-detail/member-detail';

export const routes: Routes = [
    { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
    { path: 'dashboard', component: Dashboard },
    { path: 'detail/:id', component: MemberDetail },
    { path: 'members', component: Members },
];
