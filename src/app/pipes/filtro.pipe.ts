import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtro'
})
export class FiltroPipe implements PipeTransform {
 //ARREGLAR EL PIPE
  transform(value: any,arg:any ): any {
   const resultadoFiltro=[]
   for(const equipo of value){
     if(equipo.name.indexOf(arg) > -1 || equipo.nombre==''){
       resultadoFiltro.push(equipo);
     }
   }
   return resultadoFiltro;
  }

}
