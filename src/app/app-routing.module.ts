import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegisterComponent } from './views/register/register.component';
import { ClassificationComponent } from './views/classification/classification.component';


const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'classification', component: ClassificationComponent },
  { path: '**', redirectTo: 'classification' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
