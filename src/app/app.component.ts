import { Component, OnInit } from '@angular/core';
import { forkJoin, Observable } from 'rxjs';

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

  private searchInput = '';

  private isRandom = false;

  // Pagination params
  readonly pageSize = 9;
  length = 9;
  currentPage = 0;

  constructor() { }

  ngOnInit(): void {
    this.listTrendingImages();
  }

  searchImages(searchInput: string) {
    if(!searchInput) {
      this.listTrendingImages();
      return;
    }

    this.setLocalParameters(searchInput);
    
    giphy.search({
      q: this.searchInput,
      limit: this.pageSize,
      offset: this.currentPage > 0 ? this.currentPage * this.pageSize : 0
    }).then((res: any) => {
      this.setResponseData(res);
    });
  }

  randomImages(searchInput: string) {
    if(!searchInput) {
      this.listTrendingImages();
      return;
    }

    this.setLocalParameters(searchInput, true);

    let fetches = new Array<Observable<any>>();
    for(let i = 0; i < this.pageSize; i++) {
      fetches.push(giphy.random(this.searchInput));
    }

    forkJoin(fetches).subscribe(results => {
      this.setResponseData({ data: results.map(x => x.data)}, true);
    });
  }

  changePage(pageIndex: number) {
    if(pageIndex >= 0) {
      this.currentPage = pageIndex;
      if(!this.isRandom) {
        this.searchImages(this.searchInput);
      } else {
        this.randomImages(this.searchInput);
      }
    } else {
      this.currentPage = 0;
    }
  }

  private listTrendingImages() {
    giphy.trending({
      limit: this.pageSize
    }).then((res: any) => {
      this.setResponseData(res, true);
    });
  }

  private setResponseData(res: any, isTrending = false) {
    if(res) {
      // Populate image array
      if(res.data) {
        this.images = res.data.map((x: any) => x.embed_url);
      }
      // Set the pagination
      if(res.pagination && !isTrending) {
        // TODO: Validate if pagination.offset is same than current page
        this.length = res.pagination.total_count;
      } else {
        this.length = this.pageSize;
      }
    }
  }

  private setLocalParameters(searchInput: string, isRandome = false) {
    this.searchInput = searchInput;
    this.isRandom = isRandome;
  }
}
