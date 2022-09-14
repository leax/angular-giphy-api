import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'angular-giphy-api';

  images = new Array<string>();

  pageSize = 9;
  length = 9;

  constructor() {
    // For testing purpose
    for(let i = 0; i < this.pageSize; i++) {
      this.images.push(`${i+1}`);
    }
  }

  changePage(pageIndex: number) {
    console.log(pageIndex);
  }
}
