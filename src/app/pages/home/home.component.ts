import { Component } from '@angular/core';
import { ParticipanteService } from 'src/app/Service/participante.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  loading:boolean = false
  form:boolean = true
  saved: boolean = false

  participante={
    "nombre": "",
    "email": "",
    "cedula": "",
    "celular": "",
    "celular2": "",
    "sede": ""
  }

  constructor(private participanteService:ParticipanteService) { }

  guardarParticipante() {

    if(this.participante.nombre == '' || this.participante.email == '' || this.participante.celular == ''){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Something went wrong!',
        
      })
      return
    }

    this.loading = true
    this.form = false

    this.participanteService.guardarParticipante(this.participante).subscribe(
      (data:any)=>{
        
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Participante Guardado Exitosamente',
          showConfirmButton: false,
          timer: 4000
        })
        setTimeout(() => {
          this.loading= false
          this.saved = true
        }, 4000);
      },(error:any)=>{
        console.log(error);
        
      }
    )

    
  }

}
