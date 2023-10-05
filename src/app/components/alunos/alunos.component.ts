import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-alunos',
  templateUrl: './alunos.component.html',
  styleUrls: ['./alunos.component.css']
})
export class AlunosComponent implements OnInit{

formulario: any;
tituloFormulario: string | undefined;

constructor() { }

  ngOnInit(): void {
    this.tituloFormulario = "Nova pessoa";
    this.formulario = new FormGroup({
      nome: new FormControl(null),
      sobrenome: new FormControl(null),
      idade: new FormControl(null),
      curso: new FormControl(null)
    })
  }

}
