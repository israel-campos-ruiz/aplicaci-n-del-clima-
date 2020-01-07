import { Component, OnInit } from '@angular/core';
import { ClimaService } from 'src/app/services/clima.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-clima-vista',
  templateUrl: './clima-vista.component.html',
  styleUrls: ['./clima-vista.component.css']
})
export class ClimaVistaComponent implements OnInit {
  clima:any = {};
  climaNombre:any = {}
  constructor(private climaService:ClimaService) { }
// de momento en lo que hacemos el formulario en el template va a ir en el ngOnInit 
  ngOnInit() {
  
    
  }

  getInfoWeater(city:string, code:string){
    this.climaService.getWeater(city,code).subscribe((data:any)=>{
    
      this.climaNombre = data.name;  
      this.clima = data.main;
      console.log(this.clima);
      
    })
  }

  enviarDatos(forma:any){
      this.getInfoWeater(forma.value.ciudad, forma.value.codigo);
      

      }
    
  }


