import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizkid-list',
  templateUrl: './wizkid-list.component.html',
  styleUrls: ['./wizkid-list.component.scss']
})
export class WizkidListComponent implements OnInit {
  public wizkids = ['wizkid1','wizkid2','wizkid3'];
  constructor() { }

  ngOnInit(): void {
  }

}
