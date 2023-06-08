import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from '../Utils/helper';

@Injectable({
  providedIn: 'root'
})
export class ParticipanteService {

  constructor(private http:HttpClient) { }

  guardarParticipante(participante:any){
    return this.http.post(`${baseUrl}/participante/`, participante)
  }
}
