import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanNotificationComponent } from './loan-notification.component';

describe('LoanNotificationComponent', () => {
  let component: LoanNotificationComponent;
  let fixture: ComponentFixture<LoanNotificationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LoanNotificationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanNotificationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
