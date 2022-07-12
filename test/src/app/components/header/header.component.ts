import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { WizkidsService } from 'src/app/services/wizkids.service';
import { Wizkid } from 'src/app/types/wizkid.type';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
public isAuthenticated:boolean = false;

  constructor(private router: Router,private wizkidService:WizkidsService) {}
  
  ngOnInit(): void {
    this.wizkidService.getCurrentUser().subscribe((data)=>{
this.isAuthenticated = data!=null
    })
     // this.loggedUser.next(this.wizkidService.getCurrentUser())
    
  }

  isLoggedIn() {
    return this.wizkidService.getCurrentUser().value;
}
getWizkidUser(){
  return this.wizkidService.getCurrentUser().value;
}


  logout(){
    this.wizkidService.logout().subscribe(()=>{

    })
  }
  viewAllWizkidz() {}

  addWizkid() {
    this.router.navigate(['/newWizkid']);
  }
  viewAllWizkids() {
    this.router.navigate(['/base']);
  }
}
