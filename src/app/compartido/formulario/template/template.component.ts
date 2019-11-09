import { Component } from '@angular/core';
import { NgModel } from '@angular/forms';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styles: [`
  .ng-invalid.ng-touched {
    border: 1px solid red;
  }
  `]
})
export class TemplateComponent {

  usuario:Object = {
    nombre: null,
    telefono: null,
    email: null
  }

  constructor() { }


  guardar( forma: NgForm ) {
    console.log('Formulario posteado');
    console.log( 'ngForm', forma );
    console.log( 'valor', forma.value );

    console.log( this.usuario);
  }

}
