import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-agregar',
  templateUrl: './agregar.component.html',
  styles: [
  ]
})
export class AgregarComponent implements OnInit {
  colorDeseado: string = 'red'
  mensajeDeseado: string = 'Debe ingresar este campo'

  miFormulario: FormGroup = this.formBuilderSvc.group({
    nombre: ['', [Validators.required]]
  })

  constructor(private formBuilderSvc: FormBuilder) { }

  ngOnInit(): void {
  }

  tieneError(campo: string): boolean {
    return this.miFormulario.get(campo)?.invalid || false
  }

  cambiarNombre(){
    this.mensajeDeseado = 'Sebastian Gomez'
  }

  cambiarColor(){
    this.colorDeseado = 'green'
  }
}
