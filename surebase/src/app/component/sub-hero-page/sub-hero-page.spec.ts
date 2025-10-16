import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubHeroPage } from './sub-hero-page';

describe('SubHeroPage', () => {
  let component: SubHeroPage;
  let fixture: ComponentFixture<SubHeroPage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SubHeroPage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SubHeroPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
