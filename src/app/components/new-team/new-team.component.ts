import {
  Component,
  Input,
  OnInit,
  QueryList,
  ViewChildren,
} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NgbActiveModal, NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Image } from 'src/app/class/teams/Image';
import { Team } from 'src/app/class/teams/teams';
import { TeamsService } from './../../services/teams/teams.service';
import { MembersListComponent } from './../members-list/members-list.component';

@Component({
  selector: 'dc-new-team',
  templateUrl: './new-team.component.html',
  styleUrls: ['./new-team.component.scss'],
})
export class NewTeamComponent implements OnInit {
  @ViewChildren('name') name: QueryList<any>;
  @Input() id: number;
  total: number = 0;
  selectedImg: Image;
  images: Array<Image> = [
    { path: 'noxus', title: 'Noxus' },
    { path: 'demacia', title: 'Demacia' },
  ];
  newTeam: FormGroup;

  constructor(
    public activeModal: NgbActiveModal,
    private fb: FormBuilder,
    private teamService: TeamsService,
    private modalService: NgbModal
  ) {}

  get a() {
    return this.newTeam.controls;
  }

  ngOnInit(): void {
    this.getTeam(this.id);
    this.newTeam = this.fb.group({
      title: ['', [Validators.required]],
      description: ['', [Validators.required, Validators.minLength(6)]],
    });
    this.getTotalMembers();
  }
  public addMembers(id: number) {
    const modalMembers = this.modalService.open(MembersListComponent, null);
    modalMembers.componentInstance.id = id ? id : '';
  }

  private getTeam(id: number) {
    this.teamService.getTeamById(id).subscribe((data: any) => {
      if (data) {
        this.selectedImg = data.img;
        this.newTeam.patchValue({ ...data });
      }
    });
  }

  private getTotalMembers() {
    this.teamService
      .getTotalMembers(this.id)
      .subscribe((total) => (this.total = total.length));
  }
  public selectImg(img) {
    this.selectedImg = img;
  }
  public addTeam() {
    const data = this.newTeam.value;
    Object.assign(data, { img: this.selectedImg });
    if (this.id) {
      Object.assign(data, { id: this.id });
      this.editTeam(data);
    }
    this.createTeam(data);
  }
  public editTeam(team: Team) {
    this.teamService
      .updateTeam(team)
      .subscribe((res) => this.activeModal.close(res));
  }
  public createTeam(team: Team) {
    this.teamService
      .createTeam(team)
      .subscribe((res) => this.activeModal.close(res));
  }
}
