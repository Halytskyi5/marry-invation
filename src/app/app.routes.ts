import { Routes } from '@angular/router';
import {NewPageComponent} from './new-page/new-page.component';
import {GuestsComponent} from './guests/guests.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'invite-you',
    pathMatch: 'full'
  },
  {
    path: 'invite-you',
    component: NewPageComponent
  },
  {
    path: 'guests',
    component: GuestsComponent
  }
];
