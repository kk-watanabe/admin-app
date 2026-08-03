import { Component, Input } from '@angular/core';
import { Member } from '../member';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-member-detail',
  imports: [FormsModule],
  templateUrl: './member-detail.html',
  styleUrl: './member-detail.css',
})
export class MemberDetail {
  @Input() member?: Member;
}
