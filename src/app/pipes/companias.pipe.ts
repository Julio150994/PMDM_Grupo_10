import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ordenar'
})
export class CompaniasPipe implements PipeTransform {
  /* Lo utilizamos para ordenar nuestras compañías */

  transform(valores: any, companias: string): any[] {
      if (!Array.isArray(valores)) {
        return;
      }
      valores.sort((i: any, j: any) => {
        if (i[companias] < j[companias]) {
          return -1;
        } else if (i[companias] > j[companias]) {
          return 1;
        } else {
          return 0;
        }
     });
     return valores;
  }
}
