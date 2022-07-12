import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { BehaviorSubject } from 'rxjs';
import { WizkidsService } from 'src/app/services/wizkids.service';
import { Wizkid } from 'src/app/types/wizkid.type';

@Component({
  selector: 'app-user-overview',
  templateUrl: './user-overview.component.html',
  styleUrls: ['./user-overview.component.scss'],
})
export class UserOverviewComponent implements OnInit {
  public form!: FormGroup;
  public formPreview!: FormGroup;
  public showValidation!: boolean;
  public isAuthenticated: boolean = false;
  public currentUser: BehaviorSubject<Wizkid> = new BehaviorSubject<Wizkid>(
    null
  );
  public paramId: string;
  get name(): FormControl {
    return this.form.get('name') as FormControl;
  }
  get email(): FormControl {
    return this.form.get('email') as FormControl;
  }
  get role(): FormControl {
    return this.form.get('role') as FormControl;
  }

  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private wizkidsService: WizkidsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((data) => {
      this.paramId = data['id'];

    });
  }
  submitForm() {
    const data = {
      name: this.name.value,
      email: this.email.value,
      role: this.role.value,
    };
    if (!data.name) {
      data.name = this.currentUser.value.name;
    }
    if (!data.email) {
      data.email = this.currentUser.value.email;
    }
    if (!data.role) {
      data.role = this.currentUser.value.role;
    }
    this.wizkidsService
      .updateUser(this.paramId, data.email, data.name, data.role)
      .subscribe((data) => {
        if (data) {
          this.toastr.success('Data successfully changed !');
        } else {
          this.toastr.error('Data was not changed successfully ...');
        }
      });
  }
  ngOnInit(): void {
    
    this.form = this.formBuilder.group({
      name: new FormControl(''),
      email: new FormControl(''),
      role: new FormControl(''),

    });
    this.wizkidsService.getUser(this.paramId).subscribe((data:any)=>{
      this.currentUser.next(data.data.user);
    })
    // this.wizkidsService.getCurrentUser().subscribe((data) => {
    //   this.isAuthenticated = data != null;
    //   if (data) {
    //     this.currentUser.next(data);
    //   }
    // });
  }
}
