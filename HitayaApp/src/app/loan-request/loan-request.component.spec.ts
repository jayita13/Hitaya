import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRequestComponent } from './loan-request.component';

describe('LoanRequestComponent', () => {
  let component: LoanRequestComponent;
  let fixture: ComponentFixture<LoanRequestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanRequestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRequestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
