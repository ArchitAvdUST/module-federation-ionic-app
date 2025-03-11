import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  standalone: false,
})
export class HomePage {
  cards: any = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    // Fetch the JSON file from the assets folder
    this.http.get('/assets/mf.manifest.json').subscribe((data: any) => {
      // Convert the JSON data into an array of card objects
      this.cards = Object.keys(data).map((key) => ({
        ...data[key],
        image: `../../assets/images/${key}.jpg`, // Optional: Dynamically assign images based on the key
      }));
    });
  }
}
