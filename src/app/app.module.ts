import { registerLocaleData } from '@angular/common';
import localeRu from '@angular/common/locales/ru';
import { LOCALE_ID, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MatGridListModule } from '@angular/material/grid-list'; 
import { MatIconModule } from '@angular/material/icon';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AppListComponent } from './components/app-list/app-list.component';
import { ForecastModule } from './components/forecast/forecast.module';
import { GameModule } from './components/game/game.module';
import { HomeModule } from './components/home/home.module';
import { MirrorModule } from './components/mirror/mirror.module';

@NgModule({
  declarations: [AppComponent, AppListComponent],
  imports: [
    AppRoutingModule,
    BrowserModule,
    GameModule,
    ForecastModule,
    FormsModule,
    HomeModule,
    MatIconModule,
    MatGridListModule,
    MirrorModule
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'ru' }],
  bootstrap: [AppComponent]
})
export class AppModule {}

registerLocaleData(localeRu, 'ru');
