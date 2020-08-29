import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { TeamsService } from './../../services/teams/teams.service';
@Component({
  selector: 'dc-teams',
  templateUrl: './teams.component.html',
  styleUrls: ['./teams.component.scss'],
  inputs: ['update'],
})
export class TeamsComponent implements OnInit {
  @Output() edit = new EventEmitter<Object>();
  @Input() update: Object;
  teams: Array<Object>;

  constructor(private teamService: TeamsService) {}

  ngOnInit(): void {
    this.getAllTeams();
  }
  private ngOnChanges(changes: Object) {
    this.getAllTeams();
  }
  public getAllTeams() {
    this.teamService.getTeams().subscribe((res) => (this.teams = res));
  }
  public editTeam(id: number) {
    this.edit.emit(id);
  }
  public deleteTeam(id: number) {
    this.teamService.deleteTeam(id).subscribe(() => this.getAllTeams());
  }
}
