import { ComponentFixture, TestBed } from '@angular/core/testing';
import { HotelListPage } from './hotel-list.page';

describe('HotelListPage', () => {
  let component: HotelListPage;
  let fixture: ComponentFixture<HotelListPage>;

  beforeEach(() => {
    fixture = TestBed.createComponent(HotelListPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
