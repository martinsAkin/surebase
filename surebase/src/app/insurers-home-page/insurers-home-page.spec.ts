import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InsurersHomePage } from './insurers-home-page';

describe('InsurersHomePage', () => {
  let component: InsurersHomePage;
  let fixture: ComponentFixture<InsurersHomePage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [InsurersHomePage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InsurersHomePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
