import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-grid-system',
  templateUrl: './grid-system.component.html',
  styleUrls: ['./grid-system.component.scss']
})
export class GridSystemComponent {

  // Set columns number
  @Input()
    colsNumber: number = 3;

  //Set the row height ratio
  @Input()
    rowHeightRatio: string = '3:1';

  @Input()
    images: Array<string> = new Array();

  constructor() { }

}
