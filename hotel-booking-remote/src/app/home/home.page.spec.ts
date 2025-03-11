import { ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { HotelHomePage } from './home.page';

describe('HomePage', () => {
  let component: HotelHomePage;
  let fixture: ComponentFixture<HotelHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [HotelHomePage],
      imports: [IonicModule.forRoot()],
    }).compileComponents();

    fixture = TestBed.createComponent(HotelHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
