import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ExpertInfoComponent } from './expert-info/expert-info.component';
import { HomeComponent } from './home/home.component';
import { PagesComponent } from './pages.component';
import { AddProfileFormComponent } from './add-profile-form/add-profile-form.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: PagesComponent,
    canActivateChild: [AuthGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },
      { path: 'home', component: HomeComponent },
      { path: 'add-profile', component: AddProfileFormComponent },
      {
        path: 'expert-info',
        component: ExpertInfoComponent,
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
