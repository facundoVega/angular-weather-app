import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WeatherService {
  uri:string = '';
  apiKey:string = '995b6b27de87a012d6fe76c58cd27840';

  constructor(private httpClient: HttpClient) {
     this.uri = `https://api.openweathermap.org/data/2.5/weather?appid=${this.apiKey}&units=metric&q=`;
   }

   getWeather(cityName:string, countryCode:string){
     return this.httpClient.get(`${this.uri}${cityName},${countryCode}`);
   }

}
