import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { StoreModule } from '@ngrx/store';
import { ServiceWorkerModule } from '@angular/service-worker';
import { TeamsModule } from './components/teams/teams.module';
import { ButtonsModule } from './components/button/button.module';
import { HttpClientModule } from '@angular/common/http';
import { NgbPaginationModule, NgbAlertModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { environment } from '../environments/environment';
import { RegisterComponent } from './views/register/register.component';
import { NavComponent } from './components/nav/nav.component';

import { editTeams } from './store/reducers/teams.reducer';
import { ClassificationComponent } from './views/classification/classification.component';
import { NewTeamComponent } from './components/new-team/new-team.component';
import { MembersListComponent } from './components/members-list/members-list.component';
import { VersusComponent } from './components/versus/versus.component';


@NgModule({
  declarations: [
    AppComponent,
    RegisterComponent,
    NavComponent,
    ClassificationComponent,
    NewTeamComponent,
    MembersListComponent,
    VersusComponent,
  ],
  imports: [
    TeamsModule,
    ButtonsModule,
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgbPaginationModule,
    NgbAlertModule,
    ServiceWorkerModule.register('ngsw-worker.js', { enabled: environment.production }),
    StoreModule.forRoot({
      editTeams
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
