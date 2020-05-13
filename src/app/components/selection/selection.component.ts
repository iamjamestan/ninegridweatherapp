import { Component, OnInit, HostListener} from '@angular/core';
import { WeatherDataService } from '../../services/weatherdata.service'
import { Weather } from '../../app.component'

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  weather: Weather = new Weather(false, false, false, "", "", 0, "")
  city: String = ""

  constructor(private weatherData: WeatherDataService) { }

  submit() {
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.clicked = true
      this.weather.initialized = true
      this.weather.valid = true
      this.weather.city = data['name']
      this.weather.conditions = data['weather'][0]['description']
      this.weather.temperature = data['main']['temp']
      this.weather.icon = this.weatherData.getIconUrl(data['weather'][0]['icon'])
    }, err => {
      this.weather.clicked = true
      this.weather.initialized = true
      this.weather.valid = false
      this.weather.icon = null
    })
  }
  @HostListener("click")
  onClick() {
      this.weather.clicked = true
  }

  ngOnInit(): void {
  }

}
