import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  constructor(private wizkidService: WizkidsService,private router:Router) {
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
  fireUser(){

  }
  navigateToCustomize(wizkid:Wizkid){
    this.router.navigate([`/user/${wizkid._id}`]);
  } 
  ngOnInit(): void {}
}
