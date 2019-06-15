import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatGridListModule, MatIconModule } from '@angular/material';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppListComponent } from './components/app-list/app-list.component';
import { ForecastModule } from './components/forecast/forecast.module';
import { HomeModule } from './components/home/home.module';

@NgModule({
  declarations: [AppComponent, AppListComponent],
  imports: [BrowserModule, FormsModule, AppRoutingModule, HomeModule, ForecastModule, MatIconModule, MatGridListModule],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent]
})
export class AppModule {}

registerLocaleData(localeRu, 'ru');
