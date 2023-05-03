import { CommonsModule } from './../../pages/commons/commons.module';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';

@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule, FormsModule, LoginRoutingModule, CommonsModule],
})
export class LoginModule {}
