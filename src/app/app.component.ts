import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent  {
// export class AppComponent implements OnInit {

  title = 'projectForm';
  formMateria = new FormGroup(
    {
      nomeMateria:new FormControl("", [Validators.required,Validators.minLength(3),this.checkNumbers]),
      cargaHoraria: new FormControl("", [Validators.required,Validators.min(30),Validators.max(100)]),
      nomeEscola: new FormControl("", [Validators.required,Validators.minLength(3),this.checkNumbers]),
      formDadosMateria: new FormGroup(
        {
          nomeProfessor: new FormControl("", [Validators.required]),
          rbMateria : new FormControl("", [Validators.required])
        }
      )
    },

  );

  // ngOnInit(): void {
  //   throw new Error('Method not implemented.');
  // }

  goConsole(): void {
    console.log(this.formMateria)
  }

  checkNumbers(materia: FormControl) {
    const nomeMateria = materia.value;
    const regex = /[0-9]/;
    if (nomeMateria && nomeMateria!='') {

      return regex.test(nomeMateria) ? {checkInvalido: true, actual: nomeMateria} : null;
    }
    return null;
  }

  reset(){
    this.formMateria.reset();
  }

}
