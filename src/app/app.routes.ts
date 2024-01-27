import { Routes } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { ViewDetailsComponent } from './view-details/view-details.component';
import { LandingpageComponent } from './landingpage/landingpage.component';

export const routes: Routes = [
    {path: '', component:LandingpageComponent},
      {path: 'homepage', component:HomepageComponent},
      {path: 'viewUser/:id', component: ViewDetailsComponent}
];
