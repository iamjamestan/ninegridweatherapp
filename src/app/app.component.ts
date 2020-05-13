import { Component } from '@angular/core';

export class Weather {
  constructor(public clicked: boolean, 
    public initialized: boolean,
    public valid: boolean,
    public city: String,
    public conditions: String,
    public temperature: number,
    public icon: String) {
      
    }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ninegridweatherapp';
}
