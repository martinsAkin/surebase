import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuildTheFuture } from './build-the-future';

describe('BuildTheFuture', () => {
  let component: BuildTheFuture;
  let fixture: ComponentFixture<BuildTheFuture>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BuildTheFuture]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuildTheFuture);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
