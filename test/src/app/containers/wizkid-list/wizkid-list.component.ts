import { Component, OnInit } from '@angular/core';
import { WizkidsService } from 'src/app/services/wizkids.service';

@Component({
  selector: 'app-wizkid-list',
  templateUrl: './wizkid-list.component.html',
  styleUrls: ['./wizkid-list.component.scss']
})
export class WizkidListComponent implements OnInit {
  public wizkids = ['wizkid1','wizkid2','wizkid3'];
  constructor(private wizkidsService:WizkidsService) { }

  ngOnInit(): void {
    this.wizkidsService.getWizkids().subscribe((data)=>{
      console.log(data);
    })
  }

}
