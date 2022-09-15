import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SliceArrayPipe } from './pipes/slice-array.pipe';
import { SafePipe } from './pipes/safe.pipe';

// PIPES
const PIPES = [
  SliceArrayPipe,
  SafePipe
];

@NgModule({
  declarations: [...PIPES],
  imports: [
    CommonModule
  ],
  exports: [...PIPES]
})
export class CoreModule { }
