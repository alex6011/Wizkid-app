import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-wizkid-item',
  templateUrl: './wizkid-item.component.html',
  styleUrls: ['./wizkid-item.component.scss']
})
export class WizkidItemComponent implements OnInit {
  @Input() wizkid:any;
  constructor() { }
  ngOnInit(): void {
  }

}
