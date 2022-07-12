import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { WizkidsService } from 'src/app/services/wizkids.service';
import { Wizkid } from 'src/app/types/wizkid.type';

@Component({
  selector: 'app-wizkid-list',
  templateUrl: './wizkid-list.component.html',
  styleUrls: ['./wizkid-list.component.scss']
})
export class WizkidListComponent implements OnInit {
  public wizkids:BehaviorSubject<Wizkid[]> = new BehaviorSubject<Wizkid[]>([]);
  constructor(private wizkidsService:WizkidsService) { }

  ngOnInit(): void {
    this.wizkidsService.getWizkids().subscribe((data:any)=>{
     // console.log(data.data.users);
      this.wizkids.next(data.data.users);
    })
  }

}
