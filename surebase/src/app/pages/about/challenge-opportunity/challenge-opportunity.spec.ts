import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChallengeOpportunity } from './challenge-opportunity';

describe('ChallengeOpportunity', () => {
  let component: ChallengeOpportunity;
  let fixture: ComponentFixture<ChallengeOpportunity>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ChallengeOpportunity]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChallengeOpportunity);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
