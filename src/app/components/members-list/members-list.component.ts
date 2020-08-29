import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { MembersService } from './../../services/members/members.service';

export interface Members {
  name: String;
  abiliity: String;
}

@Component({
  selector: 'dc-members-list',
  templateUrl: './members-list.component.html',
  styleUrls: ['./members-list.component.scss'],
})
export class MembersListComponent implements OnInit {
  newMember: FormGroup;
  members: Array<Members> = [];
  @ViewChildren('nick') nick: QueryList<any>;
  @Input() id: number;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private modalService: NgbModal,
    public memberService: MembersService
  ) {}

  ngOnInit(): void {
    this.newMember = this.fb.group({
      nick: ['', [Validators.required]],
      abiliity: ['', [Validators.required, Validators.minLength(3)]],
    });
    this.getMembers();
  }
  private getMembers() {
    this.memberService
      .getMembers(this.id)
      .subscribe((res) => (this.members = res));
  }
  public addMember() {
    if (this.newMember.invalid) {
      return;
    }
    this.memberService
      .createMember(this.id, this.newMember.value)
      .subscribe(() => this.getMembers());
    this.newMember.reset();
    this.nick.last.nativeElement.focus();
  }
  public deleteMember(id: number) {
    this.memberService.deleteMember(id).subscribe(() => this.getMembers());
  }
}
