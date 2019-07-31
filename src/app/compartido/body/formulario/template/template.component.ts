import { Component} from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario: Object = {
    servicio: '',
    nombre: null,
    telefono: null,
    correo: null
  }

  constructor() { }

  guardar( forma: any ) {
    console.log('Formulario posteado');
    console.log( forma );
  }
  
  servicios = [{
    codigo: 'MAN',
    nombre: 'Manitas'
  },
  {
    codigo: 'FONT',
    nombre: 'Fontaneria'
  },
  {
    codigo: 'ELEC',
    nombre: 'Electricidad'
  },
  {
    codigo: 'GAS',
    nombre: 'Gas'
  },
  {
    codigo: 'REF',
    nombre: 'Reformas'
  }]
}
