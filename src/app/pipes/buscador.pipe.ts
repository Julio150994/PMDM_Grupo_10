import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(nombre: string, ...articulos: any[]): any[] {
    console.log(articulos);

    return articulos;// devolvemos los artículos
  }

}
