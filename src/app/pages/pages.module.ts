import { ButtonModule } from 'primeng/button';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RatingModule } from 'primeng/rating';
import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { CardModule } from 'primeng/card';
import { InputTextModule } from 'primeng/inputtext';
import { DropdownModule } from 'primeng/dropdown';
import { ExpertInfoComponent } from './expert-info/expert-info.component';
import { LayoutsModule } from '../layouts/layouts.module';
import { SelectButtonModule } from 'primeng/selectbutton';
import { FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { HomeComponent } from './home/home.component';
import { AddProfileFormComponent } from './add-profile-form/add-profile-form.component';
import { CommonsModule } from './commons/commons.module';

@NgModule({
  declarations: [
    PagesComponent,
    ExpertInfoComponent,
    HomeComponent,
    AddProfileFormComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    PagesRoutingModule,
    CardModule,
    InputTextModule,
    DropdownModule,
    LayoutsModule,
    RatingModule,
    SelectButtonModule,
    FormsModule,
    TableModule,
    CommonsModule,
  ],
})
export class PagesModule {}
