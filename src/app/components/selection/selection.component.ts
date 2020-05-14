import { Component, OnInit, HostListener} from '@angular/core';
import { WeatherDataService } from '../../services/weatherdata.service'
import { Weather } from '../../app.component'
import { Observable, interval, Subscription } from 'rxjs';

@Component({
  selector: 'app-selection',
  templateUrl: './selection.component.html',
  styleUrls: ['./selection.component.css']
})
export class SelectionComponent implements OnInit {

  weather: Weather = new Weather(false, false, "", "", 0, "")
  city: String = ""
  private updateSubscription: Subscription;
  editButtonClicked: boolean = false;
  clicked: boolean = false;

  constructor(private weatherData: WeatherDataService) { }

  submit() {
    this.weatherData.load(this.city).subscribe(data => {
      this.weather.initialized = true
      this.weather.valid = true
      this.weather.city = data['name']
      this.weather.conditions = data['weather'][0]['description']
      this.weather.temperature = data['main']['temp']
      this.weather.icon = this.weather.imageURLs[this.weather.keyToURLmap[Number(data['weather'][0]['icon'].substring(0, 2))]]
    }, err => {
      this.weather.initialized = true
      this.weather.valid = false
      this.weather.icon = null
    })
  }
  @HostListener("click")
  onClick() {
      this.clicked = true
  }

  ngOnInit() {
    this.updateSubscription = interval(30000).subscribe(
      x => { if (this.clicked && this.weather.initialized && this.weather.valid) {
        this.submit();
      }
      }
    );
  }

}
