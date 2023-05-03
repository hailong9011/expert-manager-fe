import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { AuthenticationService } from 'src/app/services/common/authentication.service';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css'],
})
export class SignUpComponent implements OnInit {
  user: any;
  submitted: boolean = false;
  visible: boolean = false;

  constructor(
    private router: Router,
    private authService: AuthenticationService,
    private toastService: ToastrService
  ) {}

  ngOnInit(): void {
    this.user = {};
  }

  signup(invalid: any) {
    this.visible = true;
    if (invalid) {
      this.submitted = true;
      this.visible = false;
      return;
    }

    if (this.user.password != this.user.confirmPassword) {
      this.toastService.error('Failed', 'Confirm Password does not match !');
      this.visible = false;
      return;
    }

    let req = {
      username: this.user.username,
      password: this.user.password,
    };

    this.authService.signup(req).subscribe({
      next: (res) => {
        this.toastService.success('Success', 'Signup success !');
        this.router.navigate(['/login']);
        this.visible = false;
      },
      error: (err) => {
        this.toastService.error('Failed', 'Signup failed !');
        this.visible = false;
      },
    });
  }
}
