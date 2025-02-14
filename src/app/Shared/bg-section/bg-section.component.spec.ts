import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BGSectionComponent } from './bg-section.component';

describe('BGSectionComponent', () => {
  let component: BGSectionComponent;
  let fixture: ComponentFixture<BGSectionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [BGSectionComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BGSectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
