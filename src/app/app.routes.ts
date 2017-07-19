import { AppComponent } from './app.component';
import { UsersComponent } from './users.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  // map '/persons' to the people list component
  {
    path: 'users',
    component: UsersComponent,
  },

// map '/' to '/app' as our default route
  {
    path: '',
    redirectTo: '/users',
    pathMatch: 'full'
  },
 
   {
    path: 'appnew',
    component: AppComponent,
  },
];

export const appRouterModule = RouterModule.forRoot(routes);
