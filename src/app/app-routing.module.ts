import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CommonModule} from '@angular/common';

import { SignInComponent } from './components/sign-in/sign-in.component';
import { MainActivityComponent } from './components/main-activity/main-activity.component';


const routes: Routes = [
  { path: 'signin', component: SignInComponent },
  { path: "**", component: MainActivityComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes), CommonModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
