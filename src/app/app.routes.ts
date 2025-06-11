import { Routes } from '@angular/router';
import {NewPageComponent} from './new-page/new-page.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'invite-you',
    pathMatch: 'full'
  },
  {
    path: 'invite-you',
    component: NewPageComponent
  }
];
