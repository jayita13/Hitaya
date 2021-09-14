import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SavingsDashboardComponent } from './savings-dashboard.component';

describe('SavingsDashboardComponent', () => {
  let component: SavingsDashboardComponent;
  let fixture: ComponentFixture<SavingsDashboardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SavingsDashboardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SavingsDashboardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
