import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: []
})
export class TemplateComponent {

  usuario:Object = {
    nombre: null,
    telefono: null,
    email: null
  }

  constructor() { }


  guardar( forma: any ) {
    console.log('Formulario posteado');
    console.log( "ngForm", forma );
    console.log( "valor", forma.value );
  }

}
