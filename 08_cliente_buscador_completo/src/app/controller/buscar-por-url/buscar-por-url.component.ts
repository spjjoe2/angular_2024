import { Component } from '@angular/core';
import { BuscadorService } from '../../service/buscador.service';
import { Resultado } from '../../model/Resultado';

@Component({
  selector: 'app-buscar-por-url',
  templateUrl: './buscar-por-url.component.html',
  styleUrl: './buscar-por-url.component.css'
})
export class BuscarPorUrlComponent {
   url:string;
   //guardaremos los resultados de la búsqueda
   resultado:Resultado;
   constructor(private buscadorService:BuscadorService){

   }

   buscarPorUrl():void{
    this.buscadorService.buscarPorUrl(this.url) //Observable<Resultado>
    .subscribe(data=>this.resultado=data);//indicamos lo que hay que hacer cuando los resultados estén disponibles

   }
}
