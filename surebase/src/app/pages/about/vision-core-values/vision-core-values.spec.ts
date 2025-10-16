import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisionCoreValues } from './vision-core-values';

describe('VisionCoreValues', () => {
  let component: VisionCoreValues;
  let fixture: ComponentFixture<VisionCoreValues>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VisionCoreValues]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisionCoreValues);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
