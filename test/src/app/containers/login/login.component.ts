import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { WizkidsService } from 'src/app/services/wizkids.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  get password(): FormControl {
    return this.form.get('password') as FormControl;
  }
  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  public showValidation!: boolean;
  public form!: FormGroup;
  public formPreview!: FormGroup;
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private wizKidzService: WizkidsService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: new FormControl(''),
      password: new FormControl(''),
    });
  }
  login() {
    if (this.form.invalid) {
      this.showValidation = true;
      this.toastr.error(
        'Please try again and fill  out all required fields...',
        'Submission was unsuccessful!'
      );
      return;
    }
    this.showValidation = false;
    this.wizKidzService
      .login(this.password.value, this.email.value)
      .subscribe((data) => {
        if (data) {
          this.toastr.success('Logged in successfully');
          this.router.navigate(['/base']);
        }
      });
  }
}
