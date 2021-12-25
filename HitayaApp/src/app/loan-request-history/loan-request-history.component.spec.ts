import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanRequestHistoryComponent } from './loan-request-history.component';

describe('LoanRequestHistoryComponent', () => {
  let component: LoanRequestHistoryComponent;
  let fixture: ComponentFixture<LoanRequestHistoryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanRequestHistoryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanRequestHistoryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
