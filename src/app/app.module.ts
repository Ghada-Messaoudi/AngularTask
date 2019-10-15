import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { WeatherComponent } from './main/weather.component';
import { RouterModule, Routes } from '@angular/router';
import { WeatherTypeComponent } from './weather-infos/weather-type.component';
import {FormsModule} from '@angular/forms';

const appRoutes: Routes = [
  {
    path: 'weather',
    component: WeatherComponent
  },
  { path: '',
    redirectTo: '/weather',
    pathMatch: 'full'
  },
  { path: '**', component: WeatherComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    WeatherComponent,
    WeatherTypeComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes
    ),
    BrowserModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
