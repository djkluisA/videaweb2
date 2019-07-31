import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css']
})
export class FormularioComponent {

  constructor() { }

  usuario:Object = {
    servicio: "",
    nombre: null,
    movil: null,
    correo: null
    
  }

  servicios = [{
    codigo: "MAN",
    nombre: "Manitas"
  },
  {
    codigo: "FONT",
    nombre: "Fontaneria"
  },
  {
    codigo: "ELEC",
    nombre: "Electricidad"
  },
  {
    codigo: "GAS",
    nombre: "Gas"
  },
  {
    codigo: "REF",
    nombre: "Reformas"
  }]

}
