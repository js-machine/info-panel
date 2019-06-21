import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppListComponent } from './components/app-list/app-list.component';
import { ForecastComponent } from './components/forecast/forecast.component';
import { GameComponent } from './components/game/game.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent
  },
  {
    path: 'apps',
    component: AppListComponent
  },
  {
    path: 'forecast',
    component: ForecastComponent
  },
  {
    path: 'game',
    component: GameComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { useHash: true })],
  exports: [RouterModule]
})
export class AppRoutingModule {}
