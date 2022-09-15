import { Component, OnInit } from '@angular/core';

// TODO: move key to secret
const giphy = require('giphy-api')('liwQy9zKsLINUSamn86uk31Um8eAKknI');


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  title = 'angular-giphy-api';

  images = new Array<string>();

  searchInput = 'pokemon';

  isRandom = false;

  // Pagination params
  readonly pageSize = 9;
  length = 9;
  currentPage = 0;

  constructor() {
    // For testing purpose
    // for(let i = 0; i < this.pageSize; i++) {
    //   this.images.push(`${i+1}`);
    // }
  }

  ngOnInit(): void {
    giphy.trending({
      limit: this.pageSize
    }).then((res: any) => {
      this.setResponseData(res, true);
      console.log(res);
    });
  }

  searchImages() {
    this.isRandom = false;
    giphy.search({
      q: this.searchInput,
      limit: this.pageSize,
      offset: this.currentPage
    }).then((res: any) => {
      console.log(res);
    });
  }

  randomImages() {
    this.isRandom = true;
    giphy.random({
      q: this.searchInput,
      limit: this.pageSize,
      offset: this.currentPage
    }).then((res: any) => {
      console.log(res);
    });
  }

  changePage(pageIndex: number) {
    if(pageIndex >= 0) {
      this.currentPage = pageIndex;
      if(!this.isRandom) {
        this.searchImages();
      } else {
        this.randomImages();
      }
    } else {
      this.currentPage = 0;
    }
  }

  private setResponseData(res: any, isTrending = false) {
    if(res) {
      // Populate image array
      if(res.data) {
        this.images = res.data.map((x: any) => x.embed_url);
      }
      // Set the pagination
      if(res.pagination) {
        // TODO: Validate if pagination.offset is same than current page
        this.length = !isTrending ? res.pagination.total_count : this.pageSize;
      }
    }
  }
}
