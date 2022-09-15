import { Component, EventEmitter, Input, Output } from '@angular/core';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-paginator',
  templateUrl: './paginator.component.html',
  styleUrls: ['./paginator.component.scss']
})
export class PaginatorComponent {

  // Settings for Paginator
  @Input()
    length = 9;
  @Input()
    pageSize = 9;

  @Output()
    changePageEvent: EventEmitter<number> = new EventEmitter();

  @Input()
    isLoading: boolean = false;

  constructor() { }

  changePage($event: PageEvent) {
    this.changePageEvent.emit($event.pageIndex);
  }

}
