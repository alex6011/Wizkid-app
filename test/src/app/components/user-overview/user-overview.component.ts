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
  constructor(
    private formBuilder: FormBuilder,
    private toastr: ToastrService,
    private wizkidsService: WizkidsService,
    private route: ActivatedRoute
  ) {
    this.route.params.subscribe((data) => {
      this.paramId = data['id'];
      console.log(this.paramId);
    });
  }
  submitForm() {}
  ngOnInit(): void {
    this.form = this.formBuilder.group({
      name: new FormControl(''),
      email: new FormControl(''),
      role: new FormControl(''),
      password: new FormControl(''),
    });
    this.wizkidsService.getCurrentUser().subscribe((data) => {
      this.isAuthenticated = data != null;
      if (data) {
        this.currentUser.next(data);
      }
    });
  }
}
