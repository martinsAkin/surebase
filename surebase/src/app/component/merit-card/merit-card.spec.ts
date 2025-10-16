import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MeritCard } from './merit-card';

describe('MeritCard', () => {
  let component: MeritCard;
  let fixture: ComponentFixture<MeritCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MeritCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MeritCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
