import { Component, createPlatform, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Gato } from '../modelos/gato';
import { GatoService } from '../servicios/gato.service';
import { Location } from '@angular/common';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-gato-detail',
  templateUrl: './gato-detail.component.html',
  styleUrls: ['./gato-detail.component.css']
})
export class GatoDetailComponent implements OnInit {

  gato?:Gato;
  

  constructor( private route: ActivatedRoute, private location: Location,
    private gatoService: GatoService) { }

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    this.getGato(id!);
    
  }
  

  getGato(id: string):void{
    this.gatoService.getGato(id).subscribe(gato => this.gato=gato);
  }

  save(gato: Gato){
    this.gatoService.editGato(gato).subscribe(gato => {
      this.gato=gato;
      this.location.back()
    });
  }

}
