import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroJugador'
})
export class FiltroJugadorPipe implements PipeTransform {

  transform(value: any,arg:any ): any {
    const resultadoFiltro=[]
    for(const jugador of value){
      if(jugador.player_name.toLowerCase().indexOf(arg)> -1 || jugador.player_name === ''){
        resultadoFiltro.push(jugador);
      }
    }
    return resultadoFiltro;
   }
 

}
