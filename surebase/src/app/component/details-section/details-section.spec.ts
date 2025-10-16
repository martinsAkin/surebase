import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailsSection } from './details-section';

describe('DetailsSection', () => {
  let component: DetailsSection;
  let fixture: ComponentFixture<DetailsSection>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetailsSection]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsSection);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
