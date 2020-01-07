import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class ClimaService {
  apiKey = '998ec860b3bf933af1724697eb7cdb2c';
  uri = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
  constructor(private http:HttpClient) {

   }

   getWeater(countryName:string, countryCode:string){
        return this.http.get(`${this.uri}${countryName},${countryCode}`)
   }
}
