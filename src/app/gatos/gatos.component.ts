import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Gato } from '../modelos/gato';
import { GatoService } from '../servicios/gato.service';

@Component({
  selector: 'app-gatos',
  templateUrl: './gatos.component.html',
  styleUrls: ['./gatos.component.css']
})
export class GatosComponent implements OnInit {

  gatos: Gato[] =[];

  getGatos(): void{
    this.gatoService.getGatos().subscribe(gatos => this.gatos = gatos);
  }

  constructor(private gatoService: GatoService) { }

  ngOnInit(): void {
    this.getGatos();
  }
}
