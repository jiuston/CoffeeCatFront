import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { GatoOutputDTO } from '../modelos/gatoOutputDTO';
import { GatoService } from '../servicios/gato.service';

@Component({
  selector: 'app-add-gato',
  templateUrl: './add-gato.component.html',
  styleUrls: ['./add-gato.component.css']
})
export class AddGatoComponent implements OnInit {
  gato?: GatoOutputDTO;
  form!: FormGroup;
  file!: File;

  
  constructor(private gatoService: GatoService) { }

  ngOnInit(): void {
    this.createForm();
  }
  createForm() {
    this.form = new FormGroup({
      nombre: new FormControl('', Validators.required),
      fecha_nacimiento: new FormControl('', Validators.required),
      sexo: new FormControl('', Validators.required),
      historia: new FormControl('', Validators.required),
      imagen: new FormControl('',Validators.required)
    });
  }

  onSubmit(){
    console.log(this.form.value);
    this.gato=new GatoOutputDTO();
    this.gato.nombre=this.form.get('nombre')!.value;
    this.gato.sexo=this.form.get('sexo')!.value;
    this.gato.fecha_nacimiento=this.form.get('fecha_nacimiento')!.value;
    this.gato.historia=this.form.get('historia')!.value;
    var formData: FormData = new FormData();
    formData.append('gatoStringInputDTO', JSON.stringify(this.gato));
    formData.append('file',  this.form.get('imagen')!.value);
    this.gatoService.postGato(formData);
  }

  onFileSelected(event: Event){
    const file = (event.target as HTMLInputElement).files![0];
    this.form.patchValue({
      imagen: file,
    });
    this.form.get('imagen')!.updateValueAndValidity();
  }
}
