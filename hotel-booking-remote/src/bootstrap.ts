import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { HotelAppModule } from './app/hotel.app.module';

platformBrowserDynamic()
  .bootstrapModule(HotelAppModule)
  .catch((err) => console.log(err));
