import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimplifyCard } from './simplify-card';

describe('SimplifyCard', () => {
  let component: SimplifyCard;
  let fixture: ComponentFixture<SimplifyCard>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimplifyCard]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimplifyCard);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
