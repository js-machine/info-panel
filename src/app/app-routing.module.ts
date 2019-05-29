import {HomeComponent} from './components/home/home.component';
import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {AppListComponent} from "./components/app-list/app-list.component";
import {ForecastComponent} from "./components/forecast/forecast.component";

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
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
