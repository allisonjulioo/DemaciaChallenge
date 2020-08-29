import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Team } from '../../class/teams/teams';
import { map } from 'rxjs/operators';
import { Member } from 'src/app/class/teams/Member';


@Injectable({
  providedIn: 'root'
})
export class TeamsService {

  constructor(private http: HttpClient) { }

  getTeams() {
    return this.http.get<Team[]>(`${environment.apiUrl}/teams`);
  }

  getTotalMembers(id: number) {
    return this.http.get<Member[]>(`${environment.apiUrl}/teams/${id}/members?_page=1`)
    .pipe(map(res => res))
  }

  getTeamById(id: number) {
    return this.http.get(`${environment.apiUrl}/teams/${id}`)
      .pipe(map(res => res))
  }

  createTeam(team: Team) {
    return this.http.post(`${environment.apiUrl}/teams`, team);
  }

  updateTeam(team: Team) {
    return this.http.put(`${environment.apiUrl}/teams/${team.id}`, team);
  }

  deleteTeam(id: number) {
    return this.http.delete(`${environment.apiUrl}/teams/${id}`);
  }
}
