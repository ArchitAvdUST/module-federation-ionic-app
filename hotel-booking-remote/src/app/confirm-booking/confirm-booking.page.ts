import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-confirm-booking',
  templateUrl: './confirm-booking.page.html',
  styleUrls: ['./confirm-booking.page.scss'],
  standalone: false,
})
export class ConfirmBookingPage implements OnInit {
  ngOnInit() {}
  bookingDetails: any;

  constructor(private route: ActivatedRoute, private router: Router) {
    const navigation = this.router.getCurrentNavigation();
    this.bookingDetails = navigation?.extras.state?.['data'];
  }
}
