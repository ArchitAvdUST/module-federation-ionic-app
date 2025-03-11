import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HotelHomePage } from './home.page';

import { HotelHomePageRoutingModule } from './home-routing.module';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule, HotelHomePageRoutingModule],
  declarations: [HotelHomePage],
})
export class HotelHomePageModule {}
