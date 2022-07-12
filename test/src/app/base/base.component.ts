import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-base',
  templateUrl: './base.component.html',
  styleUrls: ['./base.component.scss'],
})
export class BaseComponent implements OnInit {
  public returnString?: any;
  public testArray: number[] = [];
  constructor() {}
  arrayFunctionTest(testArray: number[]) {
    let lowestNumber = 1;
    let filteredArray: number[] = [];
    filteredArray = testArray.filter((data) => data > 0);
    filteredArray.sort((a, b) => a - b);

    for (let index = 0; index < filteredArray.length; index++) {
      if (lowestNumber < filteredArray[index]) {
        return lowestNumber;
      } else {
        lowestNumber = filteredArray[index] + 1;
      }
      // console.log(lowestNumber);
    }
    return lowestNumber;
    //  this.returnString = myNumber;
  }

  testFunction(testArray: string[]) {
    return testArray.slice(2, 4);
  }

  ngOnInit(): void {
    //  this.returnString = this.arrayFunctionTest([3,-38,5,26,-5]);
    this.returnString = this.testFunction(['a', 'b', 'c', 'd', 'e', 'f']);
  }
}

//is 1 lower than 1 no => lowestNumber = n+1 = 2
//is 2 lower than 2 no => lowetsNumber = n+1 = 3
// is 3 lower than 3 no => lowestNumber = n+1 = 4;
//is 4 lower than 4 no => lowetsNumber = n+1 = 5;
// is 5 lower than 5 no => lowetsNumber = n+1 = 5;
//
