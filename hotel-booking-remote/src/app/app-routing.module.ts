import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'booking',
    loadChildren: () =>
      import('./confirm-booking/confirm-booking.module').then(
        (m) => m.ConfirmBookingPageModule
      ),
  },
  {
    path: 'home',
    loadChildren: () =>
      import('./home/home.module').then((m) => m.HotelHomePageModule),
  },
  {
    path: '',
    redirectTo: 'hotel-list',
    pathMatch: 'full',
  },
  {
    path: 'hotel-list',
    loadChildren: () =>
      import('./hotel-list/hotel-list.module').then(
        (m) => m.HotelListPageModule
      ),
  },
  {
    path: 'confirm-booking',
    loadChildren: () =>
      import('./confirm-booking/confirm-booking.module').then(
        (m) => m.ConfirmBookingPageModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
