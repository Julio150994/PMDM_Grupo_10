import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'orderBy'
})
export class UsersPipe implements PipeTransform {

  transform(values: any, users: string): any[] {
    if (!Array.isArray(values)) {
      return;
    }
    values.sort((i: any, j: any) => {
      if (i[users] < j[users]) {
        return -1;
      } else if (i[users] > j[users]) {
        return 1;
      } else {
        return 0;
      }
   });
   return values;
  }

}
