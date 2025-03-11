import { Component } from '@angular/core';

@Component({
  selector: 'hotel-app-root',
  templateUrl: 'hotel.app.component.html',
  styleUrls: ['app.component.scss'],
  host: { 'some-binding': 'some-value' },
  standalone: false,
})
export class HotelAppComponent {
  constructor() {}
}
