import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { WeatherDataService } from './services/weatherdata.service'
import { FormsModule } from '@angular/forms'
import { AppComponent } from './app.component';
import { SelectionComponent } from './components/selection/selection.component';

@NgModule({
  declarations: [
    AppComponent,
    SelectionComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [WeatherDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
