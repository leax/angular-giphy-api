import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// MATERIAL
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatPaginatorModule } from '@angular/material/paginator';

// CUSTOM COMPONENTS
import { GridSystemComponent } from './grid-system/grid-system.component';
import { SearchInputComponent } from './search-input/search-input.component';
import { PaginatorComponent } from './paginator/paginator.component';


const MATERIAL = [
  MatGridListModule,
  MatFormFieldModule,
  MatInputModule,
  MatIconModule,
  MatButtonModule,
  MatPaginatorModule,
];

const CUSTOM = [
  GridSystemComponent,
  SearchInputComponent,
  PaginatorComponent
];


@NgModule({
  declarations: [
    ...CUSTOM
  ],
  imports: [
    CommonModule,
    ...MATERIAL
  ],
  exports: [
    ...CUSTOM
  ]
})
export class SharedModule { }
