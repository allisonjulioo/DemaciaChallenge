import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { Member } from '../../class/teams/Member';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class MembersService {

  constructor(private http: HttpClient) { }

  getMembers(id: number) {
    return this.http.get<Member[]>(`${environment.apiUrl}/teams/${id}/members`);
  }

  getMemberById(id: number, memberId: number) {
    return this.http.get(`${environment.apiUrl}/teams/${id}/members/${memberId}`)
      .pipe(map(res => res))
  }

  createMember(id: number, member: Member) {
    return this.http.post(`${environment.apiUrl}/teams/${id}/members/`, member);
  }

  updateMember(id: number, member: Member) {
    return this.http.put(`${environment.apiUrl}/teams/${id}/members/`, member);
  }

  deleteMember(id: number) {
    return this.http.delete(`${environment.apiUrl}/members/${id}`);
  }
}
