import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RetirementSavingsComponent } from './retirement-savings.component';

describe('RetirementSavingsComponent', () => {
  let component: RetirementSavingsComponent;
  let fixture: ComponentFixture<RetirementSavingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RetirementSavingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RetirementSavingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
