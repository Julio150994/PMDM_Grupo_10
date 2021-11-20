import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'buscador'
})
export class BuscadorPipe implements PipeTransform {

  transform(nombre: string, ...articulos: any[]): any[] {
    console.log(articulos);

    // Devolvemos los nombres de los artículos
    return articulos;
  }

}
