import { Component, Input, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WizkidsService } from 'src/app/services/wizkids.service';
import { Wizkid } from 'src/app/types/wizkid.type';

@Component({
  selector: 'app-wizkid-item',
  templateUrl: './wizkid-item.component.html',
  styleUrls: ['./wizkid-item.component.scss'],
})
export class WizkidItemComponent implements OnInit {
  @Input() wizkid!: Wizkid;
  public isAuthenticated: boolean = false;
  canDelete: boolean = false;
  public currentUser: BehaviorSubject<Wizkid> = new BehaviorSubject<Wizkid>(
    null
  );
  constructor(private wizkidService: WizkidsService) {
    this.wizkidService.getCurrentUser().subscribe((data) => {
      this.isAuthenticated = data != null;
      if (data) {
        this.currentUser.next(data);
        if (this.currentUser.value.role === 'boss') {
          this.canDelete = true;
        }
      }
    });
  }
  deleteUser(wizkid: Wizkid) {
    const checker = confirm(
      'Are you sure? By proceeding this user will be lost forever...'
    );
    if (checker) {
      this.wizkidService.deleteUser(wizkid._id).subscribe((data) => {});
    } else {
      return;
    }
  }

  ngOnInit(): void {}
}
