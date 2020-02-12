import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'strVal'
})
export class StrValPipe implements PipeTransform {

  transform(value: number): string {
    if(value>0){
      return "+" + value;
    }
    return value.toString();
  }

}
