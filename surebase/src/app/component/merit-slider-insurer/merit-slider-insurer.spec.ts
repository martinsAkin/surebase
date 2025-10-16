import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeritSliderInsurer } from './merit-slider-insurer';

describe('MeritSliderInsurer', () => {
  let component: MeritSliderInsurer;
  let fixture: ComponentFixture<MeritSliderInsurer>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeritSliderInsurer]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeritSliderInsurer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
