import { Component, OnInit } from '@angular/core';
import { BehaviorSubject, filter } from 'rxjs';
import { WizkidsService } from 'src/app/services/wizkids.service';
import { Wizkid } from 'src/app/types/wizkid.type';

@Component({
  selector: 'app-wizkid-list',
  templateUrl: './wizkid-list.component.html',
  styleUrls: ['./wizkid-list.component.scss'],
})
export class WizkidListComponent implements OnInit {
  public wizkids: BehaviorSubject<Wizkid[]> = new BehaviorSubject<Wizkid[]>([]);
  public isAuthenticated: boolean = false;
  canDelete: boolean = false;
  public currentUser: BehaviorSubject<Wizkid> = new BehaviorSubject<Wizkid>(
    null
  );
  constructor(private wizkidsService: WizkidsService) {
    this.wizkidsService.getCurrentUser().subscribe((data) => {
      this.isAuthenticated = data != null;
      if (data) {
        this.currentUser.next(data);
        if (this.currentUser.value.role === 'boss') {
          this.canDelete = true;
        }
      }
    });
  }

  ngOnInit(): void {
    this.wizkidsService.getWizkids().subscribe((data: any) => {
      this.wizkids.next(data.data.users);
    });
  }
  deleteWizkid(wizkid: Wizkid) {
    const checker = confirm(
      'Are you sure? By proceeding this user will be lost forever...'
    );
    if (checker) {
      this.wizkidsService.deleteUser(wizkid._id).subscribe((data) => {
        const filteredItems = this.wizkids.value.filter(
          (item) => item !== wizkid
        );
        this.wizkids.next(filteredItems);
      });
    } else {
      return;
    }
  }
}
