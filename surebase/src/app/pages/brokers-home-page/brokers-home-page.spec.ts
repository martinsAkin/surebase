import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BrokersHomePage } from './brokers-home-page';

describe('BrokersHomePage', () => {
  let component: BrokersHomePage;
  let fixture: ComponentFixture<BrokersHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BrokersHomePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BrokersHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
