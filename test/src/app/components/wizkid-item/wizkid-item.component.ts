import { Component, Input, OnInit } from '@angular/core';
import { Wizkid } from 'src/app/types/wizkid.type';

@Component({
  selector: 'app-wizkid-item',
  templateUrl: './wizkid-item.component.html',
  styleUrls: ['./wizkid-item.component.scss']
})
export class WizkidItemComponent implements OnInit {
  @Input() wizkid!:Wizkid;
  constructor() { }
  ngOnInit(): void {
  }

}
