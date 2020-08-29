import { Component, OnInit } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { NewTeamComponent } from './../../components/new-team/new-team.component';
import { TeamsService } from './../../services/teams/teams.service';

@Component({
  selector: 'dc-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss'],
})
export class RegisterComponent implements OnInit {
  teamId: number;
  dialog: Boolean = false;
  update: Object = false;
  closeResult: string;
  constructor(
    private modalService: NgbModal,
    private teamService: TeamsService
  ) {}

  ngOnInit(): void {}
  public openModal(id: string) {
    const modalRef = this.modalService.open(NewTeamComponent, null);
    modalRef.componentInstance.id = id ? id : '';
    modalRef.result.then((result) => (this.update = result));
  }
}
