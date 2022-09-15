import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sliceArray'
})
export class SliceArrayPipe implements PipeTransform {

  transform(value: Array<string>, maxLenght: number): Array<string> {
    return value.length >= maxLenght ? value.slice(0, maxLenght) : value;
  }

}
