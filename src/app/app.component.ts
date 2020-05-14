import { Component } from '@angular/core';

export class Weather {
  keyToURLmap: Object = {1: 0, 2: 1, 3: 2,
    4: 3, 9: 4, 10: 5, 11: 6, 13: 7, 50: 8
  }
  imageURLs: String[] = ['https://images.squarespace-cdn.com/content/v1/5d2d9a1ca9ef16000192824a/1563794901853-3JNQ9NO5OB676TL40JP3/ke17ZwdGBToddI8pDm48kLRIvPFycLowAJQvlTzl45lZw-zPPgdn4jUwVcJE1ZvWQUxwkmyExglNqGp0IvTJZUJFbgE-7XRK3dMEBRBhUpz9uwD3MOBYsRl-egbHCSf_vRnpe8jScUNgFWIlvZTXqQegcZOzfaXnpIGIm_1NQyY/preview.jpg',
  'https://ak.picdn.net/shutterstock/videos/14058410/thumb/12.jpg',
  'https://image.freepik.com/free-photo/white-scattered-clouds-vivid-blue-sky-midsummer-bangkok-thailand_76000-1027.jpg',
  'https://b.rgbimg.com/users/r/rk/rkirbycom/300/out7go2.jpg',
  'https://c1.wallpaperflare.com/preview/963/100/993/rain-background-drop-weather.jpg',
  'https://ak.picdn.net/shutterstock/videos/1017803173/thumb/1.jpg',
  'https://static.bhphotovideo.com/explora/sites/default/files/styles/top_shot/public/TSlightning.jpg?itok=TWenbJvU',
  'https://nnimgt-a.akamaihd.net/transform/v1/crop/frm/fdcx/doc7ad55t3k4r91eqeuem9a.jpg/r0_280_5472_3369_w1200_h678_fmax.jpg',
  'https://i0.wp.com/www.advancednanotechnologies.com/wp-content/uploads/2019/05/iStock-1055906130.jpg?resize=1080%2C675&ssl=1'
  ]
  constructor( 
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
