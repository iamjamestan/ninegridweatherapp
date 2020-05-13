import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'

let serviceUrl: String = 'https://api.openweathermap.org/data/2.5/weather'
let apiKey: String = '3e77e492a0c2cdf266e3aec698f21e55'

@Injectable({
  providedIn: 'root'
})
export class WeatherDataService {

  constructor(private http: HttpClient) { }

  load(city: String) {
    return this.http.get(serviceUrl + '?q=' + city + '&APPID=' + apiKey + '&units=metric')
  }

  getIconUrl(icon: String) {
    return 'http://openweathermap.org/img/wn/' + icon + ".png"
  }
}
