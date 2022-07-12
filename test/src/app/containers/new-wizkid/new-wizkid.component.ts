import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ToastrService } from 'ngx-toastr';
import { WizkidsService } from 'src/app/services/wizkids.service';
import { Wizkid } from 'src/app/types/wizkid.type';

@Component({
  selector: 'app-new-wizkid',
  templateUrl: './new-wizkid.component.html',
  styleUrls: ['./new-wizkid.component.scss'],
})
export class NewWizkidComponent implements OnInit {
  public form!: FormGroup;
  public formPreview!: FormGroup;

  public showValidation!: boolean;
  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }
  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  get role(): FormControl {
    return this.form.get('role') as FormControl;
  }
  get password():FormControl{
    return this.form.get('password') as FormControl;
  }
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private wizkidsService: WizkidsService
  ) {}
  submitForm() {
    if (this.form.invalid) {
      this.showValidation = true;
      this.toastr.error(
        'Please try again and fill  out all required fields...',
        'Submission was unsuccessful!'
      );
      return;
    }
    this.showValidation = false;
    const submissionObject: Wizkid = {
      name: this.name.value,
      email: this.email.value,
      role: this.role.value,
      picture: '',
      password:this.password.value
    };
    this.wizkidsService.registerWizkid(submissionObject).subscribe((data) => {
      if (data) {
        this.toastr.success('Congratulations, user is created !');
      }
    });
    console.log(submissionObject);
  }
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(''),

      email: new FormControl(''),
      role: new FormControl(''),
      password:new FormControl(''),
    });
  }
}
