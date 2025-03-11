import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HotelHomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HotelHomePage,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HotelHomePageRoutingModule {}
