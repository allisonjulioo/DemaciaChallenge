import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TeamsComponent } from './teams.component';
import { ButtonsModule } from '../button/button.module';



@NgModule({
  declarations: [TeamsComponent],
  imports: [
    CommonModule,
    ButtonsModule
  ],
  exports: [
    TeamsComponent
  ]
})
export class TeamsModule { }
