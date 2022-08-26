import { NgModule } from '@angular/core';
import { RouterModule, Routes, RoutesRecognized } from '@angular/router';
import { NotFoundComponent } from './componnent/not-found/not-found.component';
import { StaffComponent } from './componnent/staff/staff.component';

const routes: Routes = [
  {
    path: 'staff',
    component: StaffComponent
  },
  {
    path: '',
    redirectTo: '/staff',
    pathMatch: 'full'
  },  {
    path: '**',
    component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
