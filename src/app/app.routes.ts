import { Routes } from '@angular/router';
import {HomePageComponent} from './home-page/home-page.component';
import {NewPageComponent} from './new-page/new-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    component: HomePageComponent
  },
  {
    path: 'new',
    component: NewPageComponent
  }
];
